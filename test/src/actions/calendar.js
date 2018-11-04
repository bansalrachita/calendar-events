//
// describe("analyticsTable actions", () => {
//     it("should request all analytics table data", () => {
//         const store = configureStore({});
//
//         expect(
//             store.dispatch(analyticsTableActions.devicesByAnalyticsRequestAll())
//         ).toEqual({
//             type: analyticsTableActions.DEVICES_BY_ANALYTICS_REQUEST_ALL
//         });
//     });
//
//     it("should receive count of all analytics table data", () => {
//         const type = analyticsTableActions.DEVICES_BY_ANALYTICS_RECEIVE_ALL;
//         const store = configureStore({});
//         const items = [];
//         const currentTime = moment().format();
//
//         expect(
//             store.dispatch(
//                 analyticsTableActions.devicesByAnalyticsReceiveAll(items, currentTime)
//             )
//         ).toEqual({
//             type,
//             items,
//             receivedAt: currentTime
//         });
//     });
//
//     it("should clear state of analytics table data", () => {
//         const type = analyticsTableActions.DEVICES_BY_ANALYTICS_CLEAR_ALL;
//         const store = configureStore({});
//
//         expect(
//             store.dispatch(analyticsTableActions.devicesByAnalyticsClear())
//         ).toEqual({
//             type
//         });
//     });
// });
