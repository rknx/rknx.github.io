
<style>
.switch {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-self: flex-end;
    align-self: flex-end;
    gap: 1rem;
}

nav > .switch {
    flex-direction: row;
    align-self: center;
    justify-content: flex-end;
    padding: 0 20px;
}
    
.theme-switch {
  display: flex;
  padding: 4px;
  flex: 0 0 50px;
  flex-direction: column;
  border: solid 2px var(--text_color);
  border-radius: 24px;
  background-color: #555;
}
    
.switch:before {
  content:'Light';
}
    
.switch:after {
  content:'Dark';
}

.theme-switch > input#theme {
  display:none;
}

.theme-switch > .slider {
  /* background-color: var(--text_color);*/
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  transition: .3s;
  align-self: flex-start;
}

input#theme:checked + .slider {
  align-self: flex-end;
}

input#theme + .slider {
  background-color: #fffba9;
  border: 2px solid #f6eb72;
}

input#theme:checked + .slider {
  background-color: #ffffff;
  border: 2px solid #e8e8ea;
}

</style>
<div class="switch">
    <label class="theme-switch" for="theme">
        <input type="checkbox" id="theme" />
        <div class="slider"></div>
    </label>
</div>
<script>
    // initial theme toggle
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.querySelector(':root').classList.add("dark");
        document.querySelector('#theme').checked = true;
    };
    // toggle by button
    document.querySelector('#theme').addEventListener('change', (e) => {
        if (e.currentTarget.checked) {
            document.querySelector(':root').classList.add("dark");
        } else {
            document.querySelector(':root').classList.remove("dark");
        }
    })
</script>