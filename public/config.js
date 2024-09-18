turnConfig = {
  iceServers: [
    { urls: ["stun:us-turn3.xirsys.com"] },
    {
      username:
        "vxes5JxJ1hgi1jtecKI1H_8mVhKJmQcsIY8hu1xR8IMTNru8BnwWUAvR6OiclHkFAAAAAGbEqd5wbGVhc2VoZWxwbWU=",
      credential: "8d412808-5f01-11ef-ace2-0242ac140004",
      urls: [
        "turn:us-turn3.xirsys.com:80?transport=udp",
        "turn:us-turn3.xirsys.com:3478?transport=udp",
        "turn:us-turn3.xirsys.com:80?transport=tcp",
        "turn:us-turn3.xirsys.com:3478?transport=tcp",
        "turns:us-turn3.xirsys.com:443?transport=tcp",
        "turns:us-turn3.xirsys.com:5349?transport=tcp",
      ],
    },
  ]
};