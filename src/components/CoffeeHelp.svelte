<script>
  let buttonStatus;
</script>

<section class="project-container">
  <h3><u>Coffee, Help!</u></h3>
  <section id="coffee-help-info">
    <div id="text">
      <p>For my final project on the Northcoders Coding Bootcamp I worked in a team of four to create an app inspired by the caffeine that helped us along the way... ☕️</p>
      <p>I designed an app for iOS and Android which allowed users to set caffeine limits and track their caffeine intake throughout the day.</p>
    </div>
    <img id="derek" src="/src/assets/derek1.png" alt="a personified coffee cup called Derek">
  </section>
  <summary
    class:selected="{buttonStatus === 'clicked'}"
    on:click="{() => buttonStatus === 'clicked' ? buttonStatus = '' : buttonStatus = 'clicked'}"
  >Tech Stack</summary>
  {#if buttonStatus}
    <ul style="background-color: hsl(129deg, 34%, 70%)">
      <li>Flutter</li>
      <li>Firebase Firestore</li>
      <li>Dart</li>
      <li>Xcode</li>
      <li>Android Studio</li>
    </ul>
  {/if}
  <h4>Links:</h4>
  <ul class="links">
    <li><a href="https://github.com/RossKeen/Coffee-Help-" target="_blank" rel="noreferrer" title="coffee help github">
      Github
    </a>
  </li>
    <li>
      <a href="https://www.youtube.com/watch?v=jF7IJb47cdM" target="_blank" rel="noreferrer" title="coffee help demo">
        Demo Video
      </a>
    </li>
  </ul>
</section>

<style>

  #coffee-help-info {
    display: flex;
    flex-direction: row;
    flex-basis: 0;
    align-items: center;
  }

  #derek {
    flex-grow: 1;
    max-width: 300px;
    object-fit: contain;
    padding: 30px
  }

  #text {
    flex-grow: 2;
  }

  ul {
    margin-bottom: 2rem;
  }

  @media (max-width: 640px) {
    #coffee-help-info {
      flex-direction: column;
    }
  }

</style>