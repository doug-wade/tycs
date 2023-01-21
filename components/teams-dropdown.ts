import { defineComponent, html } from "@tybalt/core";
import { from } from "rxjs";

defineComponent({
  name: "tycs-teams-dropdown",
  emits: ["input"],
  render({ teams }) {
    return html`<tycs-dropdown options=${teams}></tycs-dropdown>`;
  },
  setup() {
    return {
      leagues: from(fetch("/api/teams")),
    };
  },
});
