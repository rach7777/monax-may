#!/usr/bin/env bash
set -e

if [[ "$BUILD_REFSPEC" == "production" ]]; then
  url="https://monax.chargebee.com/api/v2"
  key="live_nGUcdtzydZcZPJglPcudm8iir4wFOffX8n:"
else
  url="https://monax-test.chargebee.com/api/v2"
  key="test_WPOrlXdx5bultihv74cuk8fSBeQZBGPgj:"
fi

plansList=$(mktemp)
addsList=$(mktemp)
curl $url/plans -sSL -u $key > $plansList
curl $url/addons -sSL -u $key > $addsList

starter_description=$(cat $plansList | jq -cr '.list | .[] | select(.plan.id=="starter-monthly") | .plan.description')
starter_price_annual=$(cat $plansList | jq '.list | .[] | select(.plan.id=="starter-annual") | .plan.price')
starter_price_monthly=$(cat $plansList | jq '.list | .[] | select(.plan.id=="starter-monthly") | .plan.price')
starter_metadata_annual=$(cat $plansList | jq '.list | .[] | select(.plan.id=="starter-annual") | .plan.meta_data')
starter_metadata_monthly=$(cat $plansList | jq '.list | .[] | select(.plan.id=="starter-monthly") | .plan.meta_data')

essential_description=$(cat $plansList | jq -cr '.list | .[] | select(.plan.id=="essential-monthly") | .plan.description')
essential_price_annual=$(cat $plansList | jq '.list | .[] | select(.plan.id=="essential-annual") | .plan.price')
essential_price_monthly=$(cat $plansList | jq '.list | .[] | select(.plan.id=="essential-monthly") | .plan.price')
essential_metadata_annual=$(cat $plansList | jq '.list | .[] | select(.plan.id=="essential-annual") | .plan.meta_data')
essential_metadata_monthly=$(cat $plansList | jq '.list | .[] | select(.plan.id=="essential-monthly") | .plan.meta_data')

professional_description=$(cat $plansList | jq -cr '.list | .[] | select(.plan.id=="professional-monthly") | .plan.description')
professional_price_annual=$(cat $plansList | jq '.list | .[] | select(.plan.id=="professional-annual") | .plan.price')
professional_price_monthly=$(cat $plansList | jq '.list | .[] | select(.plan.id=="professional-monthly") | .plan.price')
professional_metadata_annual=$(cat $plansList | jq '.list | .[] | select(.plan.id=="professional-annual") | .plan.meta_data')
professional_metadata_monthly=$(cat $plansList | jq '.list | .[] | select(.plan.id=="professional-monthly") | .plan.meta_data')

# todo massage add ons
additional_users_description=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="annual-additional-user") | .addon.description')
additional_users_price_annual=$(cat $addsList | jq '.list | .[] | select(.addon.id=="annual-additional-user") | .addon.price')
additional_users_price_monthly=$(cat $addsList | jq '.list | .[] | select(.addon.id=="monthly-additional-user") | .addon.price')

additional_contracts_description=$(cat $addsList | jq -cr '.list | .[] | select(.addon.id=="annual-templates-contracts") | .addon.description')
additional_contracts_price_annual=$(cat $addsList | jq '.list | .[] | select(.addon.id=="annual-templates-contracts") | .addon.price')
additional_contracts_price_monthly=$(cat $addsList | jq '.list | .[] | select(.addon.id=="monthly-templates-contracts") | .addon.price')

jq --null-input \
  --arg     STAR_DESC "$starter_description" \
  --arg     STAR_PRICE_ANNUAL "$starter_price_annual" \
  --arg     STAR_PRICE_MONTHLY "$starter_price_monthly" \
  --argjson STAR_META_ANNUAL "$starter_metadata_annual" \
  --argjson STAR_META_MONTHLY "$starter_metadata_monthly" \
  --arg     ESSL_DESC "$essential_description" \
  --arg     ESSL_PRICE_ANNUAL "$essential_price_annual" \
  --arg     ESSL_PRICE_MONTHLY "$essential_price_monthly" \
  --argjson ESSL_META_ANNUAL "$essential_metadata_annual" \
  --argjson ESSL_META_MONTHLY "$essential_metadata_monthly" \
  --arg     PROF_DESC "$professional_description" \
  --arg     PROF_PRICE_ANNUAL "$professional_price_annual" \
  --arg     PROF_PRICE_MONTHLY "$professional_price_monthly" \
  --argjson PROF_META_ANNUAL "$professional_metadata_annual" \
  --argjson PROF_META_MONTHLY "$professional_metadata_monthly" \
  --arg     ADD_USER_DESC "$additional_users_description" \
  --arg     ADD_USER_PRICE_ANNUAL "$additional_users_price_annual" \
  --arg     ADD_USER_PRICE_MONTHLY "$additional_users_price_monthly" \
  --arg     ADD_CONT_DESC "$additional_contracts_description" \
  --arg     ADD_CONT_PRICE_ANNUAL "$additional_contracts_price_annual" \
  --arg     ADD_CONT_PRICE_MONTHLY "$additional_contracts_price_monthly" \
  '{
    "starter":(
      { "title":"Starter",
        "price_annual":($STAR_PRICE_ANNUAL),
        "price_monthly":($STAR_PRICE_MONTHLY),
        "description":($STAR_DESC)
      } * {
        "meta_annual":($STAR_META_ANNUAL)
      } * {
        "meta_monthly":($STAR_META_MONTHLY)
      }
    ),
    "essential":(
      { "title":"Essential",
        "price_annual":($ESSL_PRICE_ANNUAL),
        "price_monthly":($ESSL_PRICE_MONTHLY),
        "description":($ESSL_DESC)
      } * {
        "meta_annual":($ESSL_META_ANNUAL)
      } * {
        "meta_monthly":($ESSL_META_MONTHLY)
      }
    ),
    "professional":(
      { "title":"Professional",
        "price_annual":($PROF_PRICE_ANNUAL),
        "price_monthly":($PROF_PRICE_MONTHLY),
        "description":($PROF_DESC)
      } * {
        "meta_annual":($PROF_META_ANNUAL)
      } * {
        "meta_monthly":($PROF_META_MONTHLY)
      }
    ),
    "addtional_users":{
      "title":"Additional Users",
      "price_monthly":($ADD_USER_PRICE_MONTHLY),
      "price_annual":($ADD_USER_PRICE_ANNUAL),
      "description":($ADD_USER_DESC)
    },
    "addtional_contracts":{
      "title":"Package of 10 additional contracts",
      "price_monthly":($ADD_CONT_PRICE_MONTHLY),
      "price_annual":($ADD_CONT_PRICE_ANNUAL),
      "description":($ADD_CONT_DESC)
    }
  }' \
  1> data/pricing_new.json

echo -e "\n\nPricing information\n"
cat data/pricing_new.json | jq .
