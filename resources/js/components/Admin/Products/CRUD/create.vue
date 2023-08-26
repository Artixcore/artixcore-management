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
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-md-3">
                                    <label for="Product" class="form-label"
                                        >Product Name
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-3">
                                    <label
                                        for="inputPassword4"
                                        class="form-label"
                                        >Category
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>
                                            Select Category
                                        </option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label
                                        for="inputPassword4"
                                        class="form-label"
                                        >Sub-Category
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>
                                            Select Sub Category
                                        </option>
                                        <option value=""></option>
                                    </select>
                                </div>

                                <div class="col-md-3">
                                    <label
                                        for="inputPassword4"
                                        class="form-label"
                                        >Product Image
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input type="file" class="form-control">
                                </div>

                                <div class="col-md-4">
                                    <label for="inputAddress" class="form-label"
                                        >Unit
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>Select Unit</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label
                                        for="inputAddress2"
                                        class="form-label"
                                        >Brand
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>Select Brand</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputCity" class="form-label"
                                        >Barcode Type
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>
                                            Select Barcode Type
                                        </option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label"
                                        >Locations
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Quantity
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>

                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Alert Quantity
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Price
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Discount</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <br/>


                    <div class="card">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-md-8">
                                    <label for="Product" class="form-label"
                                        >Product Description:
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <textarea name="" class="form-control"></textarea>
                                </div>
                                <div class="col-md-4">
                                    <label
                                        for="inputPassword4"
                                        class="form-label"
                                        >Product brochure:
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input type="file" class="form-control">
                                </div>
                                <div class="col-md-4">
                                    <label
                                        for="inputPassword4"
                                        class="form-label"
                                        >Sub-Category
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>
                                            Select Sub Category
                                        </option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputAddress" class="form-label"
                                        >Unit
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>Select Unit</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label
                                        for="inputAddress2"
                                        class="form-label"
                                        >Brand
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>Select Brand</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputCity" class="form-label"
                                        >Barcode Type
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <select name="" class="form-select">
                                        <option selected>
                                            Select Barcode Type
                                        </option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label"
                                        >Locations
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Quantity
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>

                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Alert Quantity
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Price
                                        <span class="text-danger"
                                            >*</span
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label"
                                        >Discount</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputZip"
                                    />
                                </div>
                            </div>
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
