export const GameModes = {
  props: ['state'],

  template: `
    <div class="game-modes-wrap">
      <h3 class="subtitle">Chose your game mode:</h3>
      {{state}}
      <div class="game-modes">
        <game-mode title="Standard" isActive="true"></game-mode>
        <game-mode title="Animals"></game-mode>
        <game-mode title="Video Games"></game-mode>
      </div>
    </div>
`
};

export const GameMode = {
  props: ['title', 'isActive'],

  template: `
    <button class="game-mode" v-bind:class="{ active: isActive }">
      {{title}}
    </button>
`
};