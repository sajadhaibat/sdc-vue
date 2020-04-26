<template>
    <section class="content">
        <div class="row">
            <!-- Form controls -->
            <div class="col-sm-12">
                <div class="panel panel-bd lobidrag">
                    <div class="panel-heading">

                    </div>

                    <div class="panel-body">
                        <form  class="col-sm-6">


                            <div class="form-group">
                                <label for="file">File</label>
                                <input
                                        formControlName="file"
                                        id="file"
                                        type="file"
                                        class="form-control">
                            </div>
                            <div>
                                <img [src]="imageSrc" v-if="imageSrc" style="height: 300px; width:500px">
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
    export default {
        name: "Add-Profile"
    }
</script>

<style scoped>

</style>
