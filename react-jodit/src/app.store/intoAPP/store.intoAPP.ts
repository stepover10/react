import API from 'app.modules/api';

export const useStoreIntoAPP = (set) => {
  return {
    intoAPPPrefetch: async (body) => {
      try {
        const access_token = body.cashwalkAccessToken;
        const device = body.cashwalkDevice || '';
        const deviceModel = body.cashwalkDeviceModel || '';

        if (access_token) {
          const response = await API.SSR_GET({
            url: '/v1/user',
            data: { access_token },
          });

          if (response.data.error) throw response.data.error;
          const currentUserInfo = response.data.result;

          set((state) => {
            return {
              ...state,
              intoAPP: {
                _ACCESS_TOKEN: access_token,
                info: currentUserInfo,

                device,
                deviceModel,
              },
            };
          });
        } else {
          throw '[ERROR] Not User AccessToken'
        }
      } catch (error) {
        console.error('[ERROR] Not User AccessToken');
        set((state) => {
          return {
            ...state,
            intoAPP: {
              _ACCESS_TOKEN: body.cashwalkAccessToken,
              isError: true,
            },
          };
        });
      }
    },

    intoAPPPrefetchUpdate: (data) => {
      set((state) => ({
        ...state,
        intoAPP: {
          ...state.intoAPP,
          ...data,
        },
      }));
    },
  };
};
