<template>
    <section class="content">
        <div class="row">
            <!-- Form controls -->
            <div class="col-sm-12">
                <div class="panel panel-bd lobidrag">
                    <div class="panel-heading">

                    </div>

                    <div class="panel-body">
                        <form  class="col-sm-6"  @submit.prevent="getFormValues">


                            <div class="form-group">
                                <label for="file">File</label>
                                <input
                                        ref="myFiles"
                                        @change="onFileChange"
                                        id="file"
                                        type="file"
                                        class="form-control">
                            </div>
                            <div>
                                <img :src="imageSrc" v-if="imageSrc" style="height: 300px; width:500px">
                            </div>

                            <button class="btn btn-primary" type="submit">Submit</button>
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
        name: "Add-Profile",
        data() {
            return {
                imageSrc: '',
                fileSource: null,
            }
        },

        methods: {

            onFileChange(e) {

                var file = e.target.files[0];
                this.imageSrc = URL.createObjectURL(file);
                var reader = new FileReader();
                reader.onloadend =  () => {
                    this.fileSource = reader.result;
                }
                reader.readAsDataURL(file);
                // console.log(this.fileSource);
            },
            getFormValues() {
                let data = {
                    fileSource: this.fileSource ,
                };
                axios.post('http://127.0.0.1:8000/api/profile', data).
                then(response => console.log(response)).catch(err => console.log(err));
            }
        }

    }
</script>

<style scoped>

</style>
