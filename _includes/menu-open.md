<style>
    .menu-open {
    width: 10rem;
    height: 10rem;
    top: -5rem;
    left: -5rem;
    display: block;
    cursor: pointer;
    position: fixed;
    border-radius: 50%;
    z-index: 900;
    transition: all 0.5s ease;
  }
  
  @media only screen and (min-width: 1280px) {
    .menu-open {
      display: none;
    }
  }
  
  @media (hover: hover) {
    .menu-open:hover {
      background-color:rgba(var(--back_color_fmt_rev), var(--transparency));
      transition: all 0.5s ease-in-out;
    }
  }
  
  .menu-open svg {
    height: 3rem;
    width: 3rem;
    margin: calc(50% + 5px) 0 0 calc(50% + 5px);
    position: absolute;
  }
  
  .menu-open svg path {
    --length: 24;
    --offset: -38;
    fill: none;
    stroke: var(--text_color);
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  /* -- setting for bezier animation --*/
  
  @media (hover: hover) {
    .menu-open:hover svg path {
      /*stroke: var(--text_color_rev);*/
    }
  }
  
  .menu-open svg path {
    --total-length: 126.64183044433594;
  }
  
  input#menu:checked ~ .menu-open svg path {
    --length: 22.627416998;
    --offset: -94.1149185097;
  }
  
  .menu-open svg path:nth-child(2) {
    --total-length: 70;
  }
  
  input#menu:checked ~ .menu-open svg path:nth-child(2) {
    --length: 0;
    --offset: -50;
  }
</style>

<input id="menu" type="checkbox" style="display: none;">

<label class="menu-open noprint" for="menu">
    <svg viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M0 40h62c13 0 6 28-4 18L35 35"/><path d="M0 50h70"/><path d="M0 60h62c13 0 6-28-4-18L35 65"/></svg>
</label>