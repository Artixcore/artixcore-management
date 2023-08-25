<script setup>
import Header from "../Header/Header.vue";
import Side from "../Header/Side.vue";
import Footer from "../Header/Footer.vue";

import Card from './Card.vue';
import Static from './Static.vue';
import Table from './Table.vue';

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
                            Dashboard
                        </h3>
                        <nav aria-label="breadcrumb">
                            <ul class="breadcrumb">
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    <span></span>Overview
                                    <i
                                        class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"
                                    ></i>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <Card/>

                    <Static/>

                    <Table/>


                </div>

                <Footer />
            </div>
        </div>
    </div>
</template>
