//CHECKSUM:e6c354b759ac26c07ff720175782ab2de3ebf1eb814cf949c6fce0f4a2262cbb
"use strict";

const axios = require('axios');
/**
 * Update the session nluContexts for a specific intent
 * @hidden
 * @param intentName The name of the intent to get contexts from
 */


const updateContexts = async intentName => {
  const botId = event.botId;
  const axiosConfig = await bp.http.getAxiosConfigForBot(botId);
  const {
    data
  } = await axios.get(`/mod/nlu/intents/${intentName}`, axiosConfig);
  const nluContexts = data.contexts.map(context => {
    return {
      context,
      ttl: 1000
    };
  });
  event.state.session.nluContexts = nluContexts;
};

return updateContexts(args.intentName);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsb3RfdXBkYXRlX2NvbnRleHRzLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInVwZGF0ZUNvbnRleHRzIiwiaW50ZW50TmFtZSIsImJvdElkIiwiZXZlbnQiLCJheGlvc0NvbmZpZyIsImJwIiwiaHR0cCIsImdldEF4aW9zQ29uZmlnRm9yQm90IiwiZGF0YSIsImdldCIsIm5sdUNvbnRleHRzIiwiY29udGV4dHMiLCJtYXAiLCJjb250ZXh0IiwidHRsIiwic3RhdGUiLCJzZXNzaW9uIiwiYXJncyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCO0FBRUE7Ozs7Ozs7QUFLQSxNQUFNQyxjQUFjLEdBQUcsTUFBTUMsVUFBTixJQUFvQjtBQUN6QyxRQUFNQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0QsS0FBcEI7QUFDQSxRQUFNRSxXQUFXLEdBQUcsTUFBTUMsRUFBRSxDQUFDQyxJQUFILENBQVFDLG9CQUFSLENBQTZCTCxLQUE3QixDQUExQjtBQUNBLFFBQU07QUFBRU0sSUFBQUE7QUFBRixNQUFXLE1BQU1WLEtBQUssQ0FBQ1csR0FBTixDQUFXLG9CQUFtQlIsVUFBVyxFQUF6QyxFQUE0Q0csV0FBNUMsQ0FBdkI7QUFFQSxRQUFNTSxXQUFXLEdBQUdGLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxHQUFkLENBQWtCQyxPQUFPLElBQUk7QUFDL0MsV0FBTztBQUNMQSxNQUFBQSxPQURLO0FBRUxDLE1BQUFBLEdBQUcsRUFBRTtBQUZBLEtBQVA7QUFJRCxHQUxtQixDQUFwQjtBQU1BWCxFQUFBQSxLQUFLLENBQUNZLEtBQU4sQ0FBWUMsT0FBWixDQUFvQk4sV0FBcEIsR0FBa0NBLFdBQWxDO0FBQ0QsQ0FaRDs7QUFjQSxPQUFPVixjQUFjLENBQUNpQixJQUFJLENBQUNoQixVQUFOLENBQXJCIiwic291cmNlUm9vdCI6Ii92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2J1aWxkLXdpbmRvd3MvbW9kdWxlcy9iYXNpYy1za2lsbHMvc3JjL2JhY2tlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuLyoqXG4gKiBVcGRhdGUgdGhlIHNlc3Npb24gbmx1Q29udGV4dHMgZm9yIGEgc3BlY2lmaWMgaW50ZW50XG4gKiBAaGlkZGVuXG4gKiBAcGFyYW0gaW50ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgaW50ZW50IHRvIGdldCBjb250ZXh0cyBmcm9tXG4gKi9cbmNvbnN0IHVwZGF0ZUNvbnRleHRzID0gYXN5bmMgaW50ZW50TmFtZSA9PiB7XG4gIGNvbnN0IGJvdElkID0gZXZlbnQuYm90SWRcbiAgY29uc3QgYXhpb3NDb25maWcgPSBhd2FpdCBicC5odHRwLmdldEF4aW9zQ29uZmlnRm9yQm90KGJvdElkKVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL21vZC9ubHUvaW50ZW50cy8ke2ludGVudE5hbWV9YCwgYXhpb3NDb25maWcpXG5cbiAgY29uc3Qgbmx1Q29udGV4dHMgPSBkYXRhLmNvbnRleHRzLm1hcChjb250ZXh0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGV4dCxcbiAgICAgIHR0bDogMTAwMFxuICAgIH1cbiAgfSlcbiAgZXZlbnQuc3RhdGUuc2Vzc2lvbi5ubHVDb250ZXh0cyA9IG5sdUNvbnRleHRzXG59XG5cbnJldHVybiB1cGRhdGVDb250ZXh0cyhhcmdzLmludGVudE5hbWUpXG4iXX0=