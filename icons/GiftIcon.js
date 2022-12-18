export default {
  name: 'GiftIcon',
  
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
<path d="M9.375 3C8.33947 3 7.5 3.83947 7.5 4.875C7.5 5.91053 8.33947 6.75 9.375 6.75H11.25V11.25H3.375C2.33947 11.25 1.5 10.4105 1.5 9.375V8.625C1.5 7.58947 2.33947 6.75 3.375 6.75H6.56833C6.20935 6.21371 6 5.5688 6 4.875C6 3.01104 7.51104 1.5 9.375 1.5C10.4352 1.5 11.3813 1.98888 12 2.7535C12.6187 1.98888 13.5648 1.5 14.625 1.5C16.489 1.5 18 3.01104 18 4.875C18 5.5688 17.7906 6.21371 17.4317 6.75H21.375C22.4105 6.75 23.25 7.58947 23.25 8.625V9.375C23.25 10.4105 22.4105 11.25 21.375 11.25H12.75V6.75H14.625C15.6605 6.75 16.5 5.91053 16.5 4.875C16.5 3.83947 15.6605 3 14.625 3C13.5895 3 12.75 3.83947 12.75 4.875V6.75H11.25V4.875C11.25 3.83947 10.4105 3 9.375 3Z" fill="#0F172A"/>
<path d="M11.25 12.75H3V19.5C3 20.7426 4.00736 21.75 5.25 21.75H11.25V12.75Z" fill="#0F172A"/>
<path d="M12.75 12.75V21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V12.75H12.75Z" fill="#0F172A"/>
</svg>

  }
}