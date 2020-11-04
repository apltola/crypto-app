<template>
  <div v-if="this.$store.state.currentUser">
    <h2>Manage Portfolios</h2>
    <div class="container">
      <div class="card" style="max-width: 500px">
        <div class="card-header" style="justify-content: center">
          <div>
            <div class="username">
              {{ this.$store.state.currentUser.username }}
            </div>
          </div>
        </div>
        <div class="content">
          <!-- <div class="portfolio-label">Portfolios</div> -->
          <div
            v-for="(p, idx) in portfolios"
            :key="p.id"
            class="portfolio-list-item"
          >
            <div class="row">
              <span>Portfolio Name</span>
              <span v-if="inEditMode === p.id">
                <form
                  @submit="onEditPortfolio"
                  class="portfolio-name-container"
                >
                  <span>
                    <input v-model="editName" type="text" name="editname" />
                  </span>
                  <button type="submit" class="btn-reset save-button">
                    <font-awesome-icon icon="check-circle" class="save-icon" />
                  </button>
                  <button
                    type="button"
                    @click="cancelEditMode"
                    class="btn-reset cancel-button"
                  >
                    <font-awesome-icon
                      icon="times-circle"
                      class="cancel-icon"
                    />
                  </button>
                </form>
              </span>
              <span v-else class="portfolio-name-container">
                <span>
                  {{ p.name }}
                </span>
                <button
                  @click="() => setInEditMode(p.id, p.name, idx)"
                  class="btn-reset edit-button"
                >
                  <font-awesome-icon icon="edit" class="edit-icon" />
                </button>
              </span>
            </div>
            <div class="holdings-row">
              <div class="holdings-left">{{ p.holdings.length }} holdings</div>
              <div v-if="p.holdings.length > 0" class="holdings-right">
                <span v-for="h in p.holdings" :key="h.id" class="p-holding">
                  <img class="img" :src="h.imgUrl" />
                  {{ h.coinSymbol }}
                </span>
              </div>
            </div>
            <div class="delete-row">
              <button
                class="delete-button"
                @click="() => onDeletePortfolio(p.id, p.name)"
              >
                {{
                  delPfClicked === p.id
                    ? 'Click Again to Confirm Delete'
                    : 'Delete Portfolio'
                }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';
import axios from 'axios';

export default {
  name: 'ManagePortfolios',

  data() {
    return {
      portfolios: [],
      delPfClicked: '',
      inEditMode: '',
      editName: '',
      editIndex: null,
    };
  },

  methods: {
    async onDeletePortfolio(id, name) {
      if (this.delPfClicked !== id) {
        this.delPfClicked = id;
      } else {
        console.log('delete ', name);
        const res = await axios.delete(`/api/portfolio/${id}`);
        this.portfolios = res.data;
      }
    },

    setInEditMode(id, name, idx) {
      this.inEditMode = id;
      this.editName = name;
      this.editIndex = idx;
    },

    cancelEditMode() {
      this.inEditMode = '';
      this.editName = '';
    },

    async onEditPortfolio(e) {
      e.preventDefault();

      console.log('submit');
      const res = await axios.put(`/api/portfolio/${this.inEditMode}`, {
        name: this.editName,
      });
      this.portfolios[this.editIndex] = res.data;
      this.inEditMode = false;
    },
  },

  mounted() {
    if (this.$store.state.currentUser === null) {
      router.push('/');
    }
  },

  async created() {
    const res = await axios.get('/api/portfolio');
    this.portfolios = res.data;
  },
};
</script>

<style scoped>
.account-card {
  max-width: 500px;
}

.container {
  padding-top: 30px;
}

.username {
  font-weight: bold;
  font-size: 22px;
}

.content {
  padding: 30px 40px 40px;
}

.portfolio-name-container {
  display: flex;
  align-items: center;
}

.edit-button {
  padding: 0;
  padding-left: 4px;
  margin-left: 10px;
}

.edit-button:hover {
  color: #00cdac;
}

.edit-icon {
  font-size: 18px;
}

.save-icon {
  font-size: 18px;
  color: var(--iosLightGreen);
}

.cancel-icon {
  font-size: 18px;
  color: var(--iosRed);
}

.save-button,
.cancel-button {
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: 10px;
}

.portfolio-list-item {
  padding: 20px 0;
  border-bottom: 1px solid #e1e4e8;
}

.portfolio-list-item:first-child {
  border-top: 1px solid #e1e4e8;
}

.row {
  display: flex;
  justify-content: space-between;
}

.holdings-row {
  display: flex;
  padding-top: 25px;
}

.holdings-left {
  flex: 1;
  padding-top: 2px;
}

.holdings-right {
  flex: 1.5;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
}

.p-holding {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-left: 15px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-size: 14px;
}

.img {
  height: 20px;
  margin-right: 3px;
}

.delete-row {
  padding-top: 25px;
  text-align: right;
}

.delete-button {
  border: 2px solid #fc3d39;
  background: white;
  color: #fc3d39;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 15px;
  transition: background 100ms ease-in-out;
}

.delete-button:hover {
  color: white;
  background: #fc3d39;
}

.delete-button:active {
  background: #e43633;
}

@media screen and (max-width: 600px) {
  .content {
    padding: 20px 10px 40px;
  }
  .delete-button:hover,
  .delete-button:active {
    background: white;
    color: #fc3d39;
  }
}
</style>
