import { defineComponent, html } from "@tybalt/core";
import { from } from "rxjs";

defineComponent({
  name: "tycs-leagues-dropdown",
  emits: ["input"],
  render({ leagues }) {
    return html`<tycs-dropdown options=${leagues}></tycs-dropdown>`;
  },
  setup() {
    return {
      leagues: from(fetch("/api/leagues")),
    };
  },
});
