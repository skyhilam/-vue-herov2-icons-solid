export default {
  name: 'RectangleStackIcon',
  
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },

  functional: true,

  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x' 
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';

    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs
  
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...ctx.data}>
<path d="M5.56641 4.65724C5.9435 4.55472 6.34029 4.5 6.74986 4.5H17.2499C17.6594 4.5 18.0562 4.55472 18.4333 4.65724C17.9406 3.67454 16.924 3 15.7499 3H8.24986C7.0757 3 6.0591 3.67454 5.56641 4.65724Z" fill="#0F172A"/>
<path d="M2.25 12C2.25 10.3431 3.59315 9 5.25 9H18.75C20.4069 9 21.75 10.3431 21.75 12V18C21.75 19.6569 20.4069 21 18.75 21H5.25C3.59315 21 2.25 19.6569 2.25 18V12Z" fill="#0F172A"/>
<path d="M5.24986 7.5C4.84029 7.5 4.4435 7.55472 4.06641 7.65724C4.5591 6.67454 5.5757 6 6.74986 6H17.2499C18.424 6 19.4406 6.67454 19.9333 7.65724C19.5562 7.55472 19.1594 7.5 18.7499 7.5H5.24986Z" fill="#0F172A"/>
</svg>

  }
}