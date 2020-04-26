<template>
    <section class="content">
        <div class="row">
            <!-- Form controls -->
            <div class="col-sm-12">
                <div class="panel panel-bd lobidrag">
                    <div class="panel-heading">
                        <div class="btn-group">
                            <a class="btn btn-primary" href="">
                                <i class="fa fa-list"></i>  Patient List </a>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="col-sm-6" action="" enctype="multipart/form-data" method="post">
                            <input type = "hidden" name = "_token" value = "<?php echo csrf_token() ?>" />
                            <div class="form-group">
                                <label>Patient Name</label>
                                <select  @change="onChange($event)" name="patient_id" id="patient_id" class="form-control" required>

                                    <option value="" disabled="disabled" selected>Select</option>

                                    <option v-bind:key="patient.id" v-for="patient in patients" :value="patient.id">{{patient.patient_name}}</option>

                                </select>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" class="form-control" name="address" id="address" placeholder="Patient Address" readonly required :value="address">

                            </div>
                            <div class="form-group" id="total_fee_div">
                                <label>Mobile</label>
                                <input type="number" class="form-control" id="mobile" name="mobile" placeholder="Mobile Number" readonly required :value="phone">
                            </div>

                            <div class="form-group">
                                <label>Loan Amount</label>
                                <input type="number" class="form-control" name="loan_amount" id="loan_amount" placeholder="Loan Amount" readonly required :value="loan">

                            </div>
                            <div class="form-group" >
                                <label>Total Fee</label>
                                <input type="number" class="form-control" id="total_fee" name="total_fee" placeholder="Total Fee" required>
                            </div>
                            <div class="form-group">
                                <label>Pay Amount</label>
                                <input type="number" class="form-control" id="pay_amount" name="pay_amount"  placeholder="Pay Amount" required>
                            </div>
                            <div class="form-group">
                                <label>New Loan Amount</label>
                                <input type="number" class="form-control" id="new_loan_amount" name="new_loan_amount" readonly placeholder="New Loan Amount" required>
                            </div>
                            <div class="form-group">
                                <label>Payment Date</label>
                                <input type="date" class="form-control" name="date" required>
                            </div>

                            <div class="form-group">
                                <label>Remark</label>
                                <textarea class="form-control" rows="5" name="remark" ></textarea>
                            </div>
                            <div class="reset-button">
                                <button type="submit" class="btn btn-info w-md m-b-5">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<script>
    import axios from 'axios';
    export default {
        name: "patients-payment",

        data(){
          return {
              address: '',
              phone: '',
              loan: '',
              patients: [],
          }
        },
        methods: {
            getPatients() {
                axios.get('http://127.0.0.1:8000/api/getPatientsName').then(response => this.patients = response.data).catch(err => console.log(err));
            },
            onChange(patient) {
                console.log(patient.target.value);
                 let patient_id = patient.target.value;
                axios.get('http://127.0.0.1:8000/api/getdetails/' + patient_id).
                then(response => {
                    this.phone = response.data[0]['phone_number'];
                    this.address = response.data[0]['address'];
                    this.loan = response.data[0]['loan_amount'];
                    }
                ).catch(err => console.log(err));
            }
        },

        created() {
            this.getPatients();
        }
    }
</script>

<style scoped>

</style>
