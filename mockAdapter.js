const MockAdapter = require("axios-mock-adapter");

const mockConfig = {
  emptyNextRequest: false,
};

const mockAdapter = (axiosInstance) => {
  const mock = new MockAdapter(axiosInstance);

  mock.onGet("/posts").reply((options) => {
    if (mockConfig.emptyNextRequest) {
      return [200, []];
    }
    const response = [
      200,
      [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
      ],
    ];
    return response;
  });
};

exports.mockAdapter = mockAdapter;
exports.mockConfig = mockConfig;
