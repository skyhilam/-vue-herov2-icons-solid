export default {
  name: 'TruckIcon',
  
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
<path d="M3.375 4.5C2.33947 4.5 1.5 5.33947 1.5 6.375V13.5H13.5V6.375C13.5 5.33947 12.6605 4.5 11.625 4.5H3.375Z" fill="#0F172A"/>
<path d="M13.5 15H1.5V17.625C1.5 18.6605 2.33947 19.5 3.375 19.5H3.75C3.75 17.8431 5.09315 16.5 6.75 16.5C8.40685 16.5 9.75 17.8431 9.75 19.5H12.75C13.1642 19.5 13.5 19.1642 13.5 18.75V15Z" fill="#0F172A"/>
<path d="M8.25 19.5C8.25 18.6716 7.57843 18 6.75 18C5.92157 18 5.25 18.6716 5.25 19.5C5.25 20.3284 5.92157 21 6.75 21C7.57843 21 8.25 20.3284 8.25 19.5Z" fill="#0F172A"/>
<path d="M15.75 6.75C15.3358 6.75 15 7.08579 15 7.5V18.75C15 18.8368 15.0147 18.9202 15.0419 18.9977C15.2809 17.58 16.5143 16.5 18 16.5C19.6442 16.5 20.9794 17.8226 20.9998 19.462C21.8531 19.2869 22.5224 18.5266 22.464 17.5794C22.231 13.799 20.8775 10.321 18.7324 7.4749C18.378 7.00463 17.8265 6.75 17.2621 6.75H15.75Z" fill="#0F172A"/>
<path d="M19.5 19.5C19.5 18.6716 18.8284 18 18 18C17.1716 18 16.5 18.6716 16.5 19.5C16.5 20.3284 17.1716 21 18 21C18.8284 21 19.5 20.3284 19.5 19.5Z" fill="#0F172A"/>
</svg>

  }
}