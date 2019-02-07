#!/usr/bin/env bash
set -e

url="https://monax.chargebee.com/api/v2"
key="live_nGUcdtzydZcZPJglPcudm8iir4wFOffX8n:"

plansList=$(mktemp)
addsList=$(mktemp)
curl $url/plans -sSL -u $key > $plansList
curl $url/addons -sSL -u $key > $addsList

starter_monthly_price=$(cat $plansList | jq '.list | .[] | select(.plan.id=="starter-monthly") | .plan.price')
starter_annual_price=$(cat $plansList | jq '.list | .[] | select(.plan.id=="starter-annual") | .plan.price')
starter_description=$(cat $plansList | jq -cr '.list | .[] | select(.plan.id=="starter-monthly") | .plan.description')
starter_metadata=$(cat $plansList | jq '.list | .[] | select(.plan.id=="starter-monthly") | .plan.meta_data')

essential_monthly_price=$(cat $plansList | jq '.list | .[] | select(.plan.id=="essential-monthly") | .plan.price')
essential_annual_price=$(cat $plansList | jq '.list | .[] | select(.plan.id=="essential-annual") | .plan.price')
essential_description=$(cat $plansList | jq -cr '.list | .[] | select(.plan.id=="essential-monthly") | .plan.description')
essential_metadata=$(cat $plansList | jq '.list | .[] | select(.plan.id=="essential-monthly") | .plan.meta_data')

professional_monthly_price=$(cat $plansList | jq '.list | .[] | select(.plan.id=="professional-monthly") | .plan.price')
professional_annual_price=$(cat $plansList | jq '.list | .[] | select(.plan.id=="professional-annual") | .plan.price')
professional_description=$(cat $plansList | jq -cr '.list | .[] | select(.plan.id=="professional-monthly") | .plan.description')
professional_metadata=$(cat $plansList | jq '.list | .[] | select(.plan.id=="professional-monthly") | .plan.meta_data')

additional_users_name=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-users") | .addon.name')
additional_users_price=$(cat $addsList | jq '.list | .[] | select(.addon.id=="additional-users") | .addon.price')
additional_users_description=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-users") | .addon.description')

additional_templates_name=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-templates") | .addon.name')
additional_templates_price=$(cat $addsList | jq '.list | .[] | select(.addon.id=="additional-templates") | .addon.price')
additional_templates_description=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-templates") | .addon.description')

additional_contracts_name=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-contracts") | .addon.name')
additional_contracts_price=$(cat $addsList | jq '.list | .[] | select(.addon.id=="additional-contracts") | .addon.price')
additional_contracts_description=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-contracts") | .addon.description')

additional_transactions_name=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-contractual-transactions") | .addon.name')
additional_transactions_price=$(cat $addsList | jq '.list | .[] | select(.addon.id=="additional-contractual-transactions") | .addon.price')
additional_transactions_description=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-contractual-transactions") | .addon.description')

additional_externals_name=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-external-parties") | .addon.name')
additional_externals_price=$(cat $addsList | jq '.list | .[] | select(.addon.id=="additional-external-parties") | .addon.price')
additional_externals_description=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="additional-external-parties") | .addon.description')

jq --null-input \
  --arg     STAR_MONTHLY "$starter_monthly_price" \
  --arg     STAR_ANNUAL "$starter_annual_price" \
  --arg     STAR_DESC "$starter_description" \
  --argjson STAR_META "$starter_metadata" \
  --arg     ESSL_MONTHLY "$essential_monthly_price" \
  --arg     ESSL_ANNUAL "$essential_annual_price" \
  --arg     ESSL_DESC "$essential_description" \
  --argjson ESSL_META "$essential_metadata" \
  --arg     PROF_MONTHLY "$professional_monthly_price" \
  --arg     PROF_ANNUAL "$professional_annual_price" \
  --arg     PROF_DESC "$professional_description" \
  --argjson PROF_META "$professional_metadata" \
  --arg     ADD_USER_NAME "$additional_users_name" \
  --arg     ADD_USER_PRICE "$additional_users_price" \
  --arg     ADD_USER_DESC "$additional_users_description" \
  --arg     ADD_TEMP_NAME "$additional_templates_name" \
  --arg     ADD_TEMP_PRICE "$additional_templates_price" \
  --arg     ADD_TEMP_DESC "$additional_templates_description" \
  --arg     ADD_CONT_NAME "$additional_contracts_name" \
  --arg     ADD_CONT_PRICE "$additional_contracts_price" \
  --arg     ADD_CONT_DESC "$additional_contracts_description" \
  --arg     ADD_TX_NAME "$additional_transactions_name" \
  --arg     ADD_TX_PRICE "$additional_transactions_price" \
  --arg     ADD_TX_DESC "$additional_transactions_description" \
  --arg     ADD_EXT_NAME "$additional_externals_name" \
  --arg     ADD_EXT_PRICE "$additional_externals_price" \
  --arg     ADD_EXT_DESC "$additional_externals_description" \
  '{"starter":({"title":"Starter","price_annual":($STAR_ANNUAL),"price_monthly":($STAR_MONTHLY),"description":($STAR_DESC)} * ($STAR_META)),"essential":({"title":"Essential","price_annual":($ESSL_ANNUAL),"price_monthly":($ESSL_MONTHLY),"description":($ESSL_DESC)} * ($ESSL_META)),"professional":({"title":"Professional","price_annual":($PROF_ANNUAL),"price_monthly":($PROF_MONTHLY),"description":($PROF_DESC)} * ($PROF_META)),"addtional_users":{"title":($ADD_USER_NAME),"price_monthly":($ADD_USER_PRICE),"description":($ADD_USER_DESC)},"addtional_templates":{"title":($ADD_TEMP_NAME),"price_monthly":($ADD_TEMP_PRICE),"description":($ADD_TEMP_DESC)},"addtional_contracts":{"title":($ADD_CONT_NAME),"price_monthly":($ADD_CONT_PRICE),"description":($ADD_CONT_DESC)},"additional_transactions":{"title":($ADD_TX_NAME),"price_monthly":($ADD_TX_PRICE),"description":($ADD_TX_DESC)},"additional_externals":{"title":($ADD_EXT_NAME),"price_monthly":($ADD_EXT_PRICE),"description":($ADD_EXT_DESC)}}' \
  1> data/pricing_new.json

echo -e "\n\nPricing information\n"
cat pricing_new.json | jq .
