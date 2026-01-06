import r2wc from '@r2wc/react-to-web-component';
import ProductAlert from './ProductAlert';

// React 컴포넌트를 Web Component로 변환합니다.
// props: { 속성명: '타입' } 으로 정의하면 Liquid에서 넘겨준 속성이 React props로 전달됩니다.
const WebProductAlert = r2wc(ProductAlert, {
  props: {
    productId: 'string',
    title: 'string',
  },
});

// 커스텀 엘리먼트 정의 (태그 이름은 반드시 '-'를 포함해야 합니다)
customElements.define('product-alert', WebProductAlert);
