
import './../assets/style.css';

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */'lodash');
  // prefetch:可能會用到的module
  // const { default: _ } =
  //   await import(
  //     /* webpackPrefetch: true */
  //     'lodash');
  // preload:一定會用到的module,就在現在這頁,但是lib可能過大,所以平行處理(但是只發出一個request)
  // const { default: _ } =
  //   await import(
  //     /* webpackPreload: true */
  //     'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})