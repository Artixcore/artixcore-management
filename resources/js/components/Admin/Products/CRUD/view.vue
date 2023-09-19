<script setup>
import Header from "../../Header/Header.vue";
import Side from "../../Header/Side.vue";
import Footer from "../../Header/Footer.vue";
</script>
<template>
    <div class="container-scroller">
        <Header />
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <Side />

            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="page-header">
                        <h3 class="page-title">
                            <span
                                class="page-title-icon bg-gradient-primary text-white me-2"
                            >
                                <i class="mdi mdi-home"></i>
                            </span>
                           <router-link to="/Product" style="text-decoration: none;">Products</router-link>
                        </h3>
                        <nav aria-label="breadcrumb">
                            <ul class="breadcrumb">
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    <span></span
                                    ><router-link
                                        class="btn btn-outline-primary"
                                        to="/Product/Create"
                                    >
                                        Add New Products
                                    </router-link>

                                </li>
                            </ul>
                        </nav>
                    </div>

                    <br />
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    </div>


</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('/api/Product')
        .then(response => {
          this.message = response.data.message;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
