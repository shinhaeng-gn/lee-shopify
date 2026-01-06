import r2wc from '@r2wc/react-to-web-component';
import ProductAlert from './ProductAlert';

// React 컴포넌트를 Web Component로 변환합니다.
// r2wc는 속성(Attribute) 변화를 감지하여 React props를 업데이트해줍니다.
const WebProductAlert = r2wc(ProductAlert, {
  props: {
    title: 'string',
    description: 'string',
    buttonText: 'string',
    buttonColor: 'string',
  },
});

// 커스텀 엘리먼트 정의
customElements.define('product-alert', WebProductAlert);
