<template>
    <section class="content">

        <div class="row">
            <div class="col-sm-12">
                <div class="panel panel-bd lobidrag">
                    <div class="panel-heading">
                        <div class="btn-group">
                            <!--            <a class="btn btn-success" (click)="open(content)"> <i class="fa fa-plus"></i>  Add patient</a>-->
                            <button class="btn btn-success" @click="openModal()"><i class="fa fa-plus"></i> Add Patient</button>
                        </div>

                    </div>

                    <div class="panel-body">
                        <div class="table-responsive">


                            <div class="form-group col-md-4">
                                <label>Search:</label>
                                <input type="text"  class="form-control" v-model="search" placeholder="Search Here">
                            </div>
                            <table id="dataTable"  class="table table-bordered table-hover">
                                <thead class="success">
                                <tr>
                                    <!--                <th>ID</th>-->
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>OPD</th>
                                    <th>sex</th>
                                    <th>Total</th>
                                    <th>Received</th>
                                    <th>Loan</th>
                                    <th>See Records</th>
                                    <th>Edit</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr v-bind:key="patient.id" v-for="patient in patientsFilter">
                                    <td>{{patient.patient_name}}</td>
                                    <td>{{patient.phone_number}}</td>
                                    <td>{{patient.address}}</td>
                                    <td>{{patient.OPD}}</td>
                                    <td>{{patient.gender}}</td>
                                    <td>{{patient.total_fee}}</td>
                                    <td>{{patient.received_amount}}</td>
                                    <td>{{patient.loan_amount}}</td>
                                    <td><a href="" type="button" class="btn btn-primary btn-outline w-md m-b-5">See Records</a></td>
                                    <td><a href="" type="button" class="btn btn-primary btn-outline w-sm"><i class="fa fa-edit"></i></a></td>
                                </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<script>
    import axios from 'axios';
    // import $ from 'jquery'

    export default {
        name: "patients-list",
        data () {
            return {
                search: '',
                searchQuery: '',
                patients: [],
                showModal: false,
                perPage: 3,
                pagination: {}

            }
        },
        methods: {
            getPatiens() {
                axios.get('http://127.0.0.1:8000/api/patient').then(response => this.patients = response.data).catch(err => console.log(err));
            },
            openModal () {
           this.showModal = true;
            },


        },
        computed: {
            patientsFilter:function()
            {
                // this.search = '1';
                // return this.patients.filter(function(cust){return cust.patient_name.toLowerCase().indexOf(this.search.toLowerCase())>=0;});
                // return this.patients;
                if(this.search){
                    return this.patients.filter((item) =>{
                        return item.patient_name.toLowerCase().match(this.search)
                            // || item.OPD.toLowerCase().match(this.search)
                            // item.subtitle.toLowerCase().match(this.search) ||
                            // item.action.toLowerCase().match(this.search)
                    });
                }else{
                    return this.patients;
                }
            }
        },

        created() {
            this.getPatiens();
        },

    }
</script>

<style scoped>

</style>
