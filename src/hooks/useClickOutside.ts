import { onMounted, onUnmounted, ref, Ref } from 'vue'
const useClickOutside = (elementRef: Ref) => {
  const isShowMenu = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (!elementRef.value.contains(e.target) && isShowMenu.value) {
        isShowMenu.value = true
      } else {
        isShowMenu.value = false
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isShowMenu
}
export default useClickOutside
