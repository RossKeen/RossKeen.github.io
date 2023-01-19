<script>
  let buttonStatus;
</script>

<section class="project-container">
  <h3><u>NC Games</u></h3>
  <section id="nc-games-info">
    <div>
      <p>This project is a boardgame review website. It was made as a portfolio piece as part of the Northcoders Coding Bootcamp.</p>
      <p>The project consisted of two parts. Firstly, I made an API which interfaced with an SQL database. I then designed a front-end browser application with React to accompany the back-end.</p>
      <p>NB: This project was a learning exercise and is due a revisit. Some features are missing.</p>
    </div>
    <img id="board-game" src="/src/assets/nc-games.jpg" alt="a close up of a settlers of catan board game">
  </section>
  <summary
    class:selected="{buttonStatus === 'clicked'}"
    on:click="{() => buttonStatus === 'clicked' ? buttonStatus = '' : buttonStatus = 'clicked'}"
  >Tech Stack</summary>
  {#if buttonStatus}
    <ul style="background-color: hsl(129deg, 34%, 70%)">
      <li>HTML</li>
      <li>CSS</li>
      <li>Express.js</li>
      <li>postgreSQL</li>
      <li>React</li>
      <li>Javascript</li>
    </ul>
  {/if}
  <h4>Links:</h4>
  <ul class="links">
    <li><a href="https://rk-ncgames.netlify.app/" target="_blank" rel="noreferrer" title="be-nc-games github">Deployed Application</a></li>
    <li><a href="https://github.com/RossKeen/be-nc-games" target="_blank" rel="noreferrer" title="be-nc-games github">
      Github - Back-end
    </a>
  </li>
    <li><a href="https://github.com/RossKeen/fe-nc-games" target="_blank" rel="noreferrer" title="fe-nc-games github">
      Github - Front-end
    </a>
  </li>
    <li>
      <a href="https://nc-games.cyclic.app/api" target="_blank" rel="noreferrer" title="be-nc-games hosted">
        Hosted API
      </a>
    </li>
  </ul>
</section>

<style>

  #board-game {
    max-width: 100%;
    width: 500px;
    height: auto;
    object-fit: contain;
    padding: 30px;
    margin-bottom: 1rem;
  }

  #nc-games-info {
    display: flex;
    flex-direction: column;
    flex-basis: 0;
    align-items: center;
  }

</style>