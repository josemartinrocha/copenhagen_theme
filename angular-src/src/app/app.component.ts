import { Component, OnInit } from '@angular/core';
import * as Handlebars from 'handlebars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result: any;

  ngOnInit() {
    this.runhandleBar();
  }

  runhandleBar() {
    let source = `<h1 class="visibility-hidden">{{ help_center.name }}</h1>

    <section id="main-content" class="section hero">
      <div class="hero-inner">
        <h2 class="visibility-hidden">{{ t 'search' }}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12" class="search-icon" aria-hidden="true">
          <circle cx="4.5" cy="4.5" r="4" fill="none" stroke="currentColor"/>
          <path stroke="currentColor" stroke-linecap="round" d="M11 11L7.5 7.5"/>
        </svg>
        {{search submit=false instant=settings.instant_search class='search search-full'}}
      </div>
    </section>

    <div class="container">
      <section class="section knowledge-base">
        <h2 class="visibility-hidden">{{ t 'categories' }}</h2>
        <section class="categories blocks">
          <ul class="blocks-list">
            {{#each categories}}
              {{#if ../has_multiple_categories}}
                <li class="blocks-item">
                  <a href='{{url}}' class="blocks-item-link">
                    <span class="blocks-item-title">{{name}}</span>
                    <span class="blocks-item-description">{{excerpt description}}</span>
                  </a>
                </li>
              {{else}}
                {{#each sections}}
                  <li class="blocks-item">
                    <a href='{{url}}' class="blocks-item-link">
                      <span class="blocks-item-title">
                        {{name}}
                      </span>
                      <span class="blocks-item-description">{{excerpt description}}</span>
                    </a>
                  </li>
                {{/each}}
              {{/if}}
            {{/each}}
          </ul>
          {{pagination}}
        </section>

        {{#if promoted_articles}}
          <section class="articles">
            <h2>{{t 'promoted_articles'}}</h2>
            <ul class="article-list promoted-articles">
              {{#each promoted_articles}}
                <li class="promoted-articles-item">
                    <a href="{{url}}">
                      {{title}}

                      {{#if internal}}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" class="icon-lock" title="{{t 'internal'}}">
                          <rect width="12" height="9" x="2" y="7" fill="currentColor" rx="1" ry="1"/>
                          <path fill="none" stroke="currentColor" d="M4.5 7.5V4a3.5 3.5 0 017 0v3.5"/>
                        </svg>
                      {{/if}}
                    </a>
                </li>
              {{/each}}
            </ul>
          </section>
        {{/if}}
      </section>

      {{#if help_center.community_enabled}}
        <section class="section home-section community">
          <h2>{{t 'community'}}</h2>
          {{#link 'community' class='community-link'}}
            {{t 'join_conversation'}}
          {{/link}}

          <div class="community-image"></div>
        </section>
      {{/if}}

      <section class="section home-section activity">
        {{#if settings.show_recent_activity}}
          {{recent_activity}}
        {{/if}}
      </section>
    </div>`;
    let template = Handlebars.compile(source);

    var data = {
      "name": "Alan", "hometown": "Somewhere, TX",
      "kids": [{ "name": "Jimmy", "age": "12" }, { "name": "Sally", "age": "4" }]
    };
    this.result = source;
  }
}
