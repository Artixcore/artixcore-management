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
                           New Product
                        </h3>

                    </div>

                    <div class="card">
                        <div class="card-body"></div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-body">
                            <form class="row g-3">
                                <div class="col-md-4">
                                    <label for="inputEmail4" class="form-label"
                                        >Product Name</label
                                    >
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail4"
                                    />
                                </div>
                                <div class="col-md-4">
                                    <label
                                        for="inputPassword4"
                                        class="form-label"
                                        >Password</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="inputPassword4"
                                    />
                                </div>
                                <div class="col-md-4">
                                    <label
                                        for="inputPassword4"
                                        class="form-label"
                                        >Password</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="inputPassword4"
                                    />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label"
                                        >Address</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                                <div class="col-12">
                                    <label
                                        for="inputAddress2"
                                        class="form-label"
                                        >Address 2</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputAddress2"
                                        placeholder="Apartment, studio, or floor"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label"
                                        >City</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputCity"
                                    />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label"
                                        >State</label
                                    >
                                    <select id="inputState" class="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Zip</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="gridCheck"
                                        >
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Modal title
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">
                        Understood
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
