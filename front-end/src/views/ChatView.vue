<template>
    <form  @submit.prevent="sendChat">
        <div>
            <input v-model="chatText" type="text" class="form-control" id="chatText"><button>Kirim</button>
        </div>
    </form>
    <br>
    <div>
      <p>Chats:</p>
      <div v-for="chatGroup in chats" :key="chatGroup[0].id">
        <div v-for="item in chatGroup" :key="item.id">
            <h5 v-if="item.channel.id === this.$route.params.channelId">{{ item.message }}</h5>
        </div>
      </div>
  </div>
</template>

<script>
    export default{
        data() {
            return {
                chats: [],
                chatText: '',
            };
        },
        created(){
            this.getChat();
        },
        methods: {
            async sendChat(){
                try {
                    const userReq = await fetch('http://localhost:3000/api/users/me', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                },
                });
                const chReq = await fetch('http://localhost:3000/api/channels/' + this.$route.params.channelId, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                },
                });

                const userData = await userReq.json();
                const channelData = await chReq.json() 
                console.log(channelData);
                const authorId = userData.user.id;
                console.log(authorId);
                const chId = channelData.id
                console.log(chId);
                const req = await fetch('http://localhost:3000/api/chats', {
                method: 'POST',
                credentials: 'include',
                headers: {
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                author: authorId,
                message: this.chatText,
                channel: this.$route.params.channelId
                }),
        });

                const data = await req.json();
                if (req.ok) {
                    console.log(data);
                }
        
            } catch (err) {
                    console.log(err);
                }
        },
        async getChat(){
        try {
                const req = await fetch('http://localhost:3000/api/chats', {
                method: 'GET',
                credentials: 'include',
                headers: {
                        'Content-Type': 'application/json',
                },
            });
            const data = await req.json();
            this.chats.push(data.docs);
            console.log(this.chats)
            }
            catch (err){
                console.log(err);
            }
        }
    }
}
</script>