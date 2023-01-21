import { defineComponent, html } from "@tybalt/core";
import { of } from "rxjs";

defineComponent({
  name: "tycs-leagues-dropdown",
  emits: ["input"],
  render({ leagues }) {
    return html`<tycs-dropdown options=${leagues}></tycs-dropdown>`;
  },
  setup() {
    return {
      leagues: of("mls", "nwsl", "uslc", "usl1", "mlsnp", "nasl"),
    };
  },
});
