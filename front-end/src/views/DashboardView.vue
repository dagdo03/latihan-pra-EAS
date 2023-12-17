<template>
  <div>
    <div class="my-3">
      <button @click="logout" class="btn btn-primary">
        Logout
      </button>
    </div>

    <form @submit.prevent="createChannel">
        <div class="form-group">
            <!-- <input type="hidden" name="authorEmail" id="authorEmail" v-model="authorEmail"> -->
              <input v-model="channelName" type="text" class="form-control" id="channelName">
              <button class="btn btn-success">
                  Create Channel
              </button>
        </div>
    </form>

  </div>
</template>


<script>
export default {
  data() {
    return {
      // authorEmail: '',
      servers: [],
      channelName: ''
    };
  },
  methods: {
    async logout() {
      try {
        const req = await fetch('http://localhost:3000/api/users/logout', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await req.json();
          console.log(data); // Handle the response data as needed
        if (req.ok) {

          // Assuming your API returns a success flag
          // Redirect to another route upon successful login
          this.$router.push('/login'); // Replace '/dashboard' with your desired route
        }
      } catch (err) {
        console.log(err);
      }
    },
    async createChannel(){
      try {
        const userReq = await fetch('http://localhost:3000/api/users/me', {
        method: "GET", 
        credentials: "include",
        headers: {
                  "Content-Type": "application/json",
        },
        })
        const userData = await userReq.json();
        const authorId = userData.user.id;
        // const authorEmail = userData.user.email;
        // console.log(authorEmail);
        const req = await fetch('http://localhost:3000/api/servers', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            author: authorId,
            name: this.channelName,
          }),
        });
        const data = await req.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    goToServerRoute(serverName) {
      // Assuming you have a route named 'server' to display server details
      this.$router.push(`/server/${serverName}`);
    },
  },
};
</script>