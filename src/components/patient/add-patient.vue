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
                        <form  class="col-sm-6" action="" enctype="multipart/form-data" method="post"  @submit.prevent="getFormValues">

                            <div class="form-group">
                                <label>Patient Name</label>
                                <input v-model="patient_name" type="text" class="form-control" name="patient_name" placeholder="Enter Patient Name" required>
                            </div>
                            <div class="form-group">
                                <label>Patient F/Name</label>
                                <input v-model="patient_fname" type="text" class="form-control" name="patient_fname" placeholder="Enter Patient Father Name">
                            </div>
                            <div class="form-group">
                                <label>Mobile</label>
                                <input  v-model="phone_number" type="number" class="form-control" name="phone_number" placeholder="Enter Mobile" >
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input  v-model="address" type="text" class="form-control" name="address" placeholder="Enter Address">
                            </div>


                            <div class="form-group">
                                <label>Sex</label><br>
                                <label class="radio-inline"><input v-model="gender" name="gender" value="male" checked="checked" type="radio">Male</label>
                                <label class="radio-inline"><input v-model="gender" name="gender" value="female" type="radio">Female</label>

                            </div>
                            <div class="form-group">
                                <label>OPD</label><br>
                                <label class="radio-inline"><input v-model="OPD" name="OPD" value="yes" checked="checked" type="radio">Yes</label>
                                <label class="radio-inline"><input v-model="OPD" name="OPD" value="no" type="radio">No</label>

                            </div>

                            <div class="form-group">
                                <label>Registration Date</label>
                                <input v-model="date" type="date" class="form-control" name="date" required>
                            </div>

                            <div class="form-group">
                                <label>Remark</label>
                                <textarea v-model="remark" class="form-control" rows="5" name="remark" ></textarea>
                            </div>
                            <div class="reset-button">
                                <button  class="btn btn-info w-md m-b-5">Save</button>
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
        name: "Add_Patient",

        data() {

            return {
                patient_name: '',
                patient_fname: '',
                phone_number: '',
                address: '',
                gender: '',
                OPD: '',
                date: '',
                remark: '',
            }
        },
        methods: {
            getFormValues () {
                const newPatient = {
                    patient_name: this.patient_name,
                    patient_fname: this.patient_fname,
                    phone_number: this.phone_number,
                    address: this.address,
                    gender: this.gender,
                    OPD: this.OPD,
                    date: this.date,
                    remark: this.remark

                };
                axios.post('http://127.0.0.1:8000/api/patient', newPatient).
                then(response => console.log(response)).catch(err => console.log(err));
                // this.name = submitEvent.target.elements.name.value
                console.log(newPatient);
            }
        }

    }
</script>

<style scoped>

</style>
