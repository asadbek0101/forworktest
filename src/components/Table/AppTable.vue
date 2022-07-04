<template>
      <table>
        <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Birthday</th>
              <th>PINFEL</th>
              <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{index+1}}) </td>
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.birthday}}</td>
          <td>{{item.penfil}}</td>
          <td>
            <button @click="$emit('edit', item._id)" class="btn-edit"><font-awesome-icon icon="fa-solid fa-user-pen" /></button>
            <button @click="$emit('delete', item._id)" class="btn-delete"><font-awesome-icon icon="fa-solid fa-user-xmark" /></button>
          </td>
        </tr>

        </tbody>
      </table>
</template>

<script>
export default {
  name: "AppTabel",
  props: ['data'],
  methods:{
  }

}
</script>

<style scoped lang="scss">
  table{
    width: 100%;
    background-color: white;
    border-collapse: collapse;
    margin: 20px 0;
    box-shadow: 0 0 2px 2px #d3cfcf;
    thead{
      background-color: #F7D716;
      padding: 20px;
      tr{
        th{
          padding: 10px;
        }
      }
    }
    tbody{
      tr{
        border-bottom: 2px solid #d3cfcf;
        text-align: center;
        td{
          padding: 8px 0;
          button{
            background-color: red;
            border: none;
            margin: 0 4px;
            padding: 4px;
            border-radius: 4px;
            color: white;
            cursor: pointer;
            &:hover{
              box-shadow: 0 0 2px 2px #d3cfcf;
            }
          svg{
            font-size: 18px;
          }
          }
          .btn-edit{
            background-color: green;
          }
        }
      }
    }
  }
</style>