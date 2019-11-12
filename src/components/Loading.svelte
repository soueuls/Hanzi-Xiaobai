<style type="postcss">
  .chopstick {
    position: absolute;
    width: 11px;
    height: 15vh;
    background-color: rgb(247, 223, 196);
    border: 2px solid black;
    border-radius: 80px 80px 10px 80px;
    box-shadow: inset 2px 0 0 1px rgb(233, 156, 68);
  }

  .chopstick::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 3vh;
    background-color: rgb(243, 233, 239);
    border-bottom: 2px solid black;
    box-shadow: inset 2px 0 0 1px rgb(201, 188, 188);
  }

  .chopstick.one {
    animation: move 2.5s infinite ease-in-out,
      chop 2.5s infinite ease-in-out alternate;
  }

  .chopstick.two {
    transform: rotate(10deg);
    animation: move 2.5s infinite ease-in-out;
  }

  @keyframes move {
    0% {
      left: 0;
      top: -200px;
    }
    25% {
      left: -80px;
      top: -100px;
    }
    50% {
      left: 0;
      top: 0px;
    }
    75% {
      left: 80px;
      top: -100px;
    }
    100% {
      left: 0;
      top: -200px;
    }
  }

  @keyframes chop {
    0%,
    50% {
      transform: rotate(40deg);
    }
    55% {
      transform: rotate(5deg);
    }
    60%,
    100% {
      transform: rotate(40deg);
    }
  }
</style>

<div class="relative">
  <div class="chopstick one" />
  <div class="chopstick two" />
</div>
