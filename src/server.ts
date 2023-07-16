import build from "./app";
import config from "./configs/environment";

const start = async () => {
  try {
    const PORT: number = config.PORT;
    const fastify = await build({});
    await fastify.listen({ port: PORT }, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
