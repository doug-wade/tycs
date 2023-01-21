import { defineComponent, html } from "@tybalt/core";
import { required } from "@tybalt/validator";
import { distinctUntilChanged, switchMap, map, filter } from "rxjs";

defineComponent({
  name: "tycs-team-card",
  props: {
    teamid: {
      validator: required(),
    },
  },
  render({ payload }) {
    return html`<div>${payload}</div>`;
  },
  setup({ teamid }) {
    const payload = teamid.pipe(
      filter((value) => !!value),
      distinctUntilChanged(),
      switchMap((value) => {
        return fetch(`/api/get-team/${value}`).then((response) =>
          response.json()
        );
      }),
      map((value) => JSON.stringify(value))
    );
    return { payload };
  },
});
