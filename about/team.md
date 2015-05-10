---

layout:     wide
title:      "Eris Industries: Team"
css:        team
javascript: team

---


<!-- team -->
<div class="team">
  <div class="row">
    {% for member in site.data.team %}
      {% assign human = member[1] %}
        <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2">
          <div class="team-member">
            <img src="{{ human.gravatar | asset_path }}" alt="{{ human.name }}" class="team-headshot" />
            {% if human.name %}
              <div class="team-name">{{ human.name }}</div>
            {% endif %}
            {% if human.title %}
              <div class="team-title">{{ human.title }}</div>
            {% endif %}
            <div class="team-details hidden">
              <!-- need to do this again else the stacking will get screwy -->
              <img src="{{ human.gravatar | asset_path }}" alt="{{ human.name }}" class="team-headshot" />
              {% if human.name %}
                <div class="team-name">{{ human.name }}</div>
              {% endif %}
              {% if human.title %}
                <div class="team-title">{{ human.title }}</div>
              {% endif %}
              {% if human.bio %}
                <div class="team-bio">{{ human.bio }}</div>
              {% endif %}
              <div class="team-links">
                {% if human.site %}
                  <a href="{{ human.site }}" target="_blank">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square fa-stack-2x"></i>
                      <i class="fa fa-globe fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                {% endif %}
                {% if human.twitter %}
                  <a href="https://twitter.com/{{ human.twitter }}" target="_blank">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square fa-stack-2x"></i>
                      <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                {% endif %}
                {% if human.github %}
                  <a href="https://github.com/{{ human.github }}" target="_blank">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square fa-stack-2x"></i>
                      <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                {% endif %}
              </div><!-- .team-links -->
            </div><!-- .team-details -->
          </div><!-- .team-member -->
        </div><!-- .cols -->
    {% endfor %}
  </div><!-- .row -->
</div>