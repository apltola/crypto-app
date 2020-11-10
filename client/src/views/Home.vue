<template>
  <section class="home">
    <div class="bg-diagonal"></div>
    <div class="container">
      <h1 class="title">Track Your Crypto Portfolio</h1>
      <div class="subtitle">
        <router-link to="/auth/register" class="register-link">
          Create Account
        </router-link>
        <span class="or">...or</span>
        <router-link to="/auth/signin" class="signin-link">
          Sign In
        </router-link>
      </div>
      <div class="image-row row-top">
        <div class="textbox">
          <h2>Build your portfolio</h2>
        </div>
        <img src="../assets/images/promo4.png" class="image" />
      </div>
      <div class="image-row row-bottom">
        <div class="textbox">
          <h2>View portfolio value progression</h2>
        </div>
        <img src="../assets/images/promo5.png" class="image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',

  components: {},
};
</script>

<style scoped>
.home {
  color: white;
  display: flex;
  justify-content: center;
}

.bg-diagonal {
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  position: absolute;
  z-index: -1;
  height: 750px;
  top: -400px;
  right: 0;
  /* bottom: 65vh; */
  left: 0;
  transform: skewY(-10deg);
}

.container {
  flex: 1;
  /* border: 1px solid red; */
  max-width: 1300px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
}

.title {
  text-align: left;
  font-size: 40px;
  padding-left: 20px;
}

.subtitle {
  text-align: left;
  padding: 0 20px;
  color: white;
  font-weight: 600;
  font-size: 24px;
}

.subtitle a {
  color: inherit;
}

.subtitle a:hover {
  color: var(--caribbeanGreen);
}

.or,
.signin-link {
  font-size: 18px;
}

.image-row {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  padding-top: 5vh;
  padding-bottom: 50px;
}

.row-top {
  align-items: flex-end;
}

.row-bottom {
  align-items: flex-start;
  padding-top: 0;
}

.textbox {
  /* border: 1px solid black; */
  display: flex;
  color: black;
}

.textbox h2 {
  font-size: 36px;
  margin-block-end: 20px;
  /* border: 1px solid red; */
}

.image {
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
}

@media screen and (max-width: 600px) {
  .bg-diagonal {
    top: -450px;
  }

  .title {
    font-size: 34px;
    text-align: center;
  }

  .subtitle {
    text-align: center;
    font-size: 22px;
  }

  .image-row {
    align-items: stretch;
    padding-top: 100px;
    align-items: center;
  }

  .row-bottom {
    padding-top: 0;
  }

  .textbox {
    flex: 1;
    justify-content: center;
  }

  .image {
    max-width: 95vw;
  }
}

@media screen and (min-width: 800px) {
  .title {
    font-size: 50px;
  }
  .image {
    max-width: 700px;
  }
}
</style>
