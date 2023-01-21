import { defineComponent, html } from "@tybalt/core";
import { from } from "rxjs";

defineComponent({
  name: "tycs-dropdown",
  emits: ["input"],
  props: {
    options: {
      default: [],
      validator: (val) => {
        val.each((option) => option.label && option.value);
      },
    },
  },
  render({ options }) {
    return html`<div>this is a dropdown with ${options.length} options</div>`;
  },
});
