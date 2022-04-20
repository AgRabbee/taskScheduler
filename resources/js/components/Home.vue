<template>
    <div>
        <div v-if="alertMessage != ''" class="alert" :class="alertType" role="alert">
            {{alertMessage}}
        </div>

        <button class="btn btn-success btn-sm my-2" @click="addTask()"><i class="fa fa-plus"></i> Add New Task</button>
        <table class="table table-striped table-bordered">
            <thead>
            <th style="width: 10%; text-align: center;">SL</th>
            <th style="width: 60%;">Task Name</th>
            <th style="width: 30%; text-align: center;">Action</th>
            </thead>
            <tbody>
            <tr v-for="(data, key) in tasks" :key="key">
                <td class="text-center">{{ key + 1 }}</td>
                <td>{{ data.name }}</td>
                <td class="text-center">
                    <button class="btn btn-primary btn-sm" @click=" (event)=> viewTask(event, data)"><i class="fa fa-eye"></i></button>
                    <button class="btn btn-info btn-sm" @click=" (event)=> updateTask(event, data)"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-danger btn-sm" @click=" (event)=> deleteTask(event, data)"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
            </tbody>
        </table>

        <!--viewTaskModal-->
        <b-modal ref="viewTaskModal" header-class="border-0 py-0" body-class="text-justify" hide-footer>
            <div class="mt-3">
                <hr>
                <p><span class="font-weight-bold">Task name: </span>{{ this.singleTaskData.name }}</p>
                <hr>
                <button class="btn btn-sm btn-secondary" @click="closeModal('viewTaskModal')"> Close</button>
            </div>
        </b-modal>

        <!--addTaskModal-->
        <b-modal ref="addTaskModal" header-class="border-0 py-0" body-class="text-justify" hide-footer>
            <div class="mt-3">
                <div class="form-group">
                    <label for="addTask">Task Name</label>
                    <input type="text" class="form-control" id="addTask"
                           placeholder="Please input your task name ..."
                           v-model="singleTaskData.name">
                </div>
                <hr>
                <div>
                    <button class="btn btn-sm btn-secondary" @click="closeModal('addTaskModal')"><i class="fa fa-times"></i> Close</button>
                    <button class="btn btn-sm btn-success" @click="addTaskData()"><i class="fa fa-plus"></i> Add</button>
                </div>
            </div>
        </b-modal>

        <!--updateTaskModal-->
        <b-modal ref="updateTaskModal" header-class="border-0 py-0" body-class="text-justify" hide-footer>
            <div class="mt-3">
                <div class="form-group">
                    <label for="addTask">Task Name</label>
                    <input type="text" class="form-control" v-model="singleTaskData.name">
                </div>
                <hr>
                <div>
                    <button class="btn btn-sm btn-secondary" @click="closeModal('updateTaskModal')"><i class="fa fa-times"></i> Close</button>
                    <button class="btn btn-sm btn-success" @click="updateTaskData()"><i class="fa fa-book"></i>  Update</button>
                </div>
            </div>
        </b-modal>

        <!--deleteTaskModal-->
        <b-modal ref="deleteTaskModal" header-class="border-0 py-0" body-class="text-justify" hide-footer>
            <div class="text-center mt-3">
                <hr>
                <p>Are you sure to delete task # <span class="font-weight-bold">{{ this.singleTaskData.name }}</span></p>
                <hr>
                <div>
                    <button class="btn btn-sm btn-secondary" @click="closeModal('deleteTaskModal')"><i class="fa fa-times"></i> Close</button>
                    <button class="btn btn-sm btn-danger" @click="deleteTaskData()"><i class="fa fa-trash"></i> Delete</button>
                </div>
            </div>
        </b-modal>

    </div>

</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            tasks: '',
            singleTaskData: {
                id: '',
                name: '',
            },
            alertType: '',
            alertMessage: ''
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        closeModal(modalname) {
            this.$refs[modalname].hide();
        },
        fetchData() {
            axios.post('/getTaskList')
                .then((res) => {
                    this.tasks = res.data.tasks;
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        viewTask(event, data) {
            this.clearTaskData();
            this.singleTaskData.name = data.name;
            this.$refs['viewTaskModal'].show();
        },
        addTask(){
            this.clearTaskData();
            this.$refs['addTaskModal'].show();
        },
        addTaskData(){
            axios.post('/addTask',
                {
                    name: this.singleTaskData.name,
                })
                .then((res) => {
                    if(res.data.responseCode == 1){
                        this.alertType = "alert-success";
                        this.alertMessage = "Successfully added!!!";
                    }else{
                        this.alertType = "alert-danger";
                        this.alertMessage = "Cannot add task!!!";
                    }
                    this.$refs['addTaskModal'].hide();
                    this.fetchData();
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        updateTask(event, data) {
            this.clearTaskData();
            this.singleTaskData.id = data.id;
            this.singleTaskData.name = data.name;
            this.$refs['updateTaskModal'].show();
        },
        updateTaskData(){
            axios.post('/updateTask',
                {
                    id: this.singleTaskData.id,
                    name: this.singleTaskData.name,
                })
                .then((res) => {
                    if(res.data.responseCode == 1){
                        this.alertType = "alert-success";
                        this.alertMessage = "Successfully updated!!!";
                    }else{
                        this.alertType = "alert-danger";
                        this.alertMessage = "Cannot update task!!!";
                    }
                    this.$refs['updateTaskModal'].hide();
                    this.fetchData();
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        deleteTask(event, data) {
            this.clearTaskData();
            this.singleTaskData.id = data.id;
            this.singleTaskData.name = data.name;
            this.$refs['deleteTaskModal'].show();
        },
        deleteTaskData(){
            axios.post('/deleteTask',
                {
                    id: this.singleTaskData.id,
                })
                .then((res) => {
                    if(res.data.responseCode == 1){
                        this.alertType = "alert-success";
                        this.alertMessage = "Successfully deleted!!!";
                    }else{
                        this.alertType = "alert-danger";
                        this.alertMessage = "Cannot delete task!!!";
                    }
                    this.$refs['deleteTaskModal'].hide();
                    this.fetchData();
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        clearTaskData() {
            this.singleTaskData.name = '';
        }

    }
}
</script>
