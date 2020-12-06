import axios from 'axios';

export default async function someFunctionToCreateInviteLink() {
    try {
        const data = await axios.post(`https://discord.com/api/v8/channels/${process.env.CHANNEL_ID}/invites`, { max_age: 0, max_uses: 1, unique: true }, {
            headers: {
                Authorization: `Bot ${process.env.BOT_TOKEN}`,
            },
        });
        return `https://discord.gg/${data.data.code}`;
    } catch (e) {
        return Promise.reject(e);
    }
}
