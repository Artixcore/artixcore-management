<template>
     <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">David Grey. H</span>
                  <span class="text-secondary text-small">Project Manager</span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Dashboard">
                <span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/Dashboard">
                <span class="menu-title">User Management</span>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Products" aria-expanded="false" aria-controls="Products">
                <span class="menu-title">Products</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Products">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="/Product">Products</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Categories</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Unit</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Brand</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Warranties</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Import Products</router-link></li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Customer" aria-expanded="false" aria-controls="Customer">
                <span class="menu-title">Customer</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Customer">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="">Customers</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Import Contacts</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Customer Group</router-link></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Purchases" aria-expanded="false" aria-controls="Purchases">
                <span class="menu-title">Purchases</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Purchases">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="">List Purchases</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">New Purchases</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Return Purchases</router-link></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Sells" aria-expanded="false" aria-controls="Sells">
                <span class="menu-title">Sales</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Sells">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="">List Sales</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">New Sales</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Return Purchases</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Discount</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Taxes</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Shipment</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Import Sales</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">List Quotation</router-link></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Stock" aria-expanded="false" aria-controls="Stock">
                <span class="menu-title">Stock</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Stock">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="">List Stock</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Stock Transfer</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Stock Adjustment</router-link></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Expenses" aria-expanded="false" aria-controls="Expenses">
                <span class="menu-title">Expenses</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Expenses">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="">List Expenses</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Add Expenses</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Expenses Category</router-link></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Payments" aria-expanded="false" aria-controls="Payments">
                <span class="menu-title">Payments</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Payments">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="">List Payments</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Add Payments</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Balance Sheet</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Payment Report</router-link></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Reports" aria-expanded="false" aria-controls="Reports">
                <span class="menu-title">Reports</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Reports">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="">Loss / Profit Reports</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Purchase & Sale</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Customer Report</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Supplier Report</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Stock Adjustment Report</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Sell Report</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Commission Report</router-link></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#Settings" aria-expanded="false" aria-controls="Settings">
                <span class="menu-title">Settings</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse" id="Reports">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <router-link class="nav-link" to="">Business Settings</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Location</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Invoice</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Barcode Settings</router-link></li>
                  <li class="nav-item"> <router-link class="nav-link" to="">Tax Settings</router-link></li>
                </ul>
              </div>
            </li>


          </ul>
        </nav>
</template>
