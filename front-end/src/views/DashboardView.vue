<template>
  <div>
    <div class="my-3">
      <button @click="logout" class="btn btn-primary">
        Logout
      </button>
    </div>

    <form @submit.prevent="createChannel">
        <div class="form-group">
              <input v-model="channelName" type="text" class="form-control" id="channelName">
              <button @click="createChannel" class="btn btn-success">
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
      channelName: '',
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
        const req = await fetch('http://localhost:3000/api/channels', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          title: "New page",
          }),
        });
        const data = await req.json();
          console.log(data); // Handle the response data as needed
        // if (req.ok) {

        //   // Assuming your API returns a success flag
        //   // Redirect to another route upon successful login
        //   this.$router.push('/login'); // Replace '/dashboard' with your desired route
        // }
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>