FROM node:14.5.0-buster-slim
COPY . .
WORKDIR /seccams
RUN \
    npm install && \
    npm run-script build
    # npm install
CMD ["node", "__sapper__/build"]
# CMD ["/usr/local/bin/npm", "start"]
