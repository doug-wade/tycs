import { defineComponent, html } from "@tybalt/core";
import { from } from "rxjs";

defineComponent({
  name: "tycs-team-card",
  render({ payload }) {
    return html` <div>${payload}</div> `;
  },
  setup() {
    return { payload: from(fetch("/api/team/1")) };
  },
});
