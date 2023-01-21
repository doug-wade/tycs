import { defineComponent, html } from "@tybalt/core";
import { required } from "@tybalt/validator";
import { distinctUntilChanged, switchMap, filter, map } from "rxjs";

defineComponent({
  name: "tycs-teams-dropdown",
  emits: ["input"],
  props: {
    league: {
      validator: required(),
    },
  },
  render({ teams }) {
    return html`<tycs-dropdown options=${teams}></tycs-dropdown>`;
  },
  setup({ league }) {
    const teams = league.pipe(
      filter((value) => !!value),
      distinctUntilChanged(),
      switchMap((value) => {
        return fetch(`/api/get-teams/${value}`);
      }),
      map(async (response: Response) => await response.json())
    );

    return {
      teams,
    };
  },
});
