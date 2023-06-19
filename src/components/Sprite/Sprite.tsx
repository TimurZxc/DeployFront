import React from "react"

interface Props {
  id: string
}

const Sprite = ({ id }: Props) => {
  switch (id) {
    case 'camera':
      return(
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 101.28"><g><path d="M28.94,12.53V4.77c0-1.31,0.54-2.51,1.4-3.37C31.2,0.54,32.39,0,33.7,0h55.47c1.31,0,2.51,0.54,3.37,1.4 c0.86,0.86,1.4,2.06,1.4,3.37v7.77h25.23c1.02,0,1.95,0.42,2.62,1.09c0.67,0.67,1.09,1.6,1.09,2.62v15.73v50.94v14.67 c0,1.02-0.42,1.95-1.09,2.62c-0.67,0.67-1.6,1.09-2.62,1.09H3.7c-1.02,0-1.95-0.42-2.62-1.09C0.42,99.52,0,98.6,0,97.58V82.91 V31.97V16.24c0-1.02,0.42-1.95,1.09-2.62c0.67-0.67,1.6-1.09,2.62-1.09H28.94L28.94,12.53z M61.9,32.86 c12.98,0,23.5,10.52,23.5,23.5c0,1.82-0.21,3.59-0.6,5.29c-0.95,4.68-3.26,8.86-6.51,12.11c-4.31,4.31-10.27,6.98-16.85,6.98 c-6.58,0-12.54-2.67-16.85-6.98c-4.31-4.31-6.98-10.27-6.98-16.85c0-6.58,2.67-12.54,6.98-16.85c2.37-2.37,5.24-4.24,8.43-5.45 C55.76,33.48,58.76,32.86,61.9,32.86L61.9,32.86z M31.54,4.77v7.77h59.8V4.77c0-0.59-0.24-1.14-0.64-1.53 c-0.39-0.39-0.93-0.64-1.53-0.64H33.7c-0.59,0-1.14,0.24-1.53,0.64C31.78,3.63,31.54,4.17,31.54,4.77L31.54,4.77z M2.6,81.61h36.3 c-0.38-0.34-0.75-0.7-1.11-1.06C31.75,74.5,28,66.14,28,56.91c0-9.23,3.74-17.58,9.79-23.63H2.6V81.61L2.6,81.61z M42.14,84.21H2.6 v13.37c0,0.3,0.12,0.58,0.32,0.77c0.2,0.2,0.47,0.32,0.78,0.32h115.48c0.3,0,0.58-0.12,0.77-0.32c0.2-0.2,0.32-0.47,0.32-0.77 V84.21H80.74c-5.45,3.86-12.11,6.13-19.3,6.13C54.25,90.34,47.59,88.07,42.14,84.21L42.14,84.21z M43.26,81.81 c0.04,0.03,0.08,0.05,0.12,0.08c5.08,3.68,11.32,5.84,18.06,5.84s12.99-2.17,18.06-5.84c0.04-0.03,0.08-0.06,0.12-0.08 c1.29-0.94,2.5-1.98,3.62-3.1c5.58-5.58,9.03-13.29,9.03-21.8c0-8.51-3.45-16.22-9.03-21.8c-0.73-0.73-1.5-1.43-2.31-2.09 c-0.03-0.02-0.06-0.05-0.09-0.07c-5.3-4.3-12.05-6.87-19.4-6.87c-7.35,0-14.1,2.57-19.4,6.87c-0.03,0.03-0.06,0.05-0.09,0.07 c-0.8,0.66-1.58,1.35-2.31,2.09c-5.58,5.58-9.03,13.29-9.03,21.8c0,8.51,3.45,16.22,9.03,21.8C40.76,79.83,41.97,80.87,43.26,81.81 L43.26,81.81z M83.98,81.61h36.3V33.27H85.09c6.05,6.05,9.79,14.41,9.79,23.63c0,9.23-3.74,17.59-9.8,23.64 C84.72,80.91,84.35,81.26,83.98,81.61L83.98,81.61z M2.6,30.67h38.11c5.7-4.51,12.9-7.2,20.73-7.2s15.03,2.69,20.73,7.2h38.11 V16.24c0-0.3-0.12-0.58-0.32-0.77c-0.2-0.2-0.47-0.32-0.77-0.32H3.7c-0.3,0-0.58,0.12-0.78,0.32c-0.2,0.2-0.32,0.47-0.32,0.77 V30.67L2.6,30.67z"/></g></svg>
      )
    case 'logo':
      return (
        <svg viewBox="0 0 45 46" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.50001 13.5H8.00001V16.5H1.00001C0.605013 16.5 0.245013 16.735 0.0850129 17.095C-0.0749871 17.46 -0.00498715 17.88 0.260013 18.175C2.76001 20.925 2.76001 25.075 0.260013 27.825C-0.00498715 28.12 -0.0749871 28.54 0.0850129 28.905C0.245013 29.265 0.605013 29.5 1.00001 29.5H38.5C42.085 29.5 45 26.585 45 23C45 19.415 42.085 16.5 38.5 16.5H18V13.5H44C44.395 13.5 44.755 13.265 44.915 12.905C45.075 12.54 45.005 12.12 44.74 11.825C42.24 9.075 42.24 4.925 44.74 2.175C45.005 1.88 45.075 1.46 44.915 1.095C44.8361 0.918144 44.7078 0.767876 44.5454 0.662306C44.3831 0.556736 44.1937 0.50037 44 0.5H6.50001C2.91501 0.5 1.28357e-05 3.415 1.28357e-05 7C1.28357e-05 10.585 2.91501 13.5 6.50001 13.5ZM38.5 18.5C40.98 18.5 43 20.52 43 23C43 25.48 40.98 27.5 38.5 27.5H2.95501C3.73175 26.1274 4.13998 24.5771 4.13998 23C4.13998 21.4229 3.73175 19.8726 2.95501 18.5H8.00001V22.5C8.00001 22.6857 8.05173 22.8678 8.14936 23.0257C8.247 23.1837 8.38669 23.3114 8.5528 23.3944C8.71891 23.4775 8.90486 23.5126 9.08982 23.496C9.27478 23.4793 9.45144 23.4114 9.60001 23.3L13 20.75L16.4 23.3C16.575 23.43 16.79 23.5 17 23.5C17.2652 23.5 17.5196 23.3946 17.7071 23.2071C17.8947 23.0196 18 22.7652 18 22.5V18.5H38.5ZM10 20.5V8.5H16V20.5L13.6 18.7C13.42 18.565 13.21 18.5 13 18.5C12.79 18.5 12.58 18.565 12.4 18.7L10 20.5ZM6.50001 2.5H42.045C41.2683 3.87259 40.86 5.42287 40.86 7C40.86 8.57713 41.2683 10.1274 42.045 11.5H18V7.5C18 6.95 17.55 6.5 17 6.5H9.00001C8.45001 6.5 8.00001 6.95 8.00001 7.5V11.5H6.50001C4.02001 11.5 2.00001 9.48 2.00001 7C2.00001 4.52 4.02001 2.5 6.50001 2.5ZM44.915 33.095C44.8361 32.9181 44.7078 32.7679 44.5454 32.6623C44.3831 32.5567 44.1937 32.5004 44 32.5H6.50001C2.91501 32.5 1.28357e-05 35.415 1.28357e-05 39C1.28357e-05 42.585 2.91501 45.5 6.50001 45.5H44C44.395 45.5 44.755 45.265 44.915 44.905C45.075 44.54 45.005 44.12 44.74 43.825C42.24 41.075 42.24 36.925 44.74 34.175C45.005 33.88 45.075 33.46 44.915 33.095ZM42.045 43.5H6.50001C4.02001 43.5 2.00001 41.48 2.00001 39C2.00001 36.52 4.02001 34.5 6.50001 34.5H42.045C41.2683 35.8726 40.86 37.4229 40.86 39C40.86 40.5771 41.2683 42.1274 42.045 43.5Z" />
        </svg>
      )
    case 'dropdown':
      return (
        <svg viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.7026 9.674C8.7126 9.662 8.7166 9.646 8.7266 9.634L15.7086 1.92C16.0986 1.486 16.0986 0.782 15.7086 0.348C15.7046 0.344 15.7006 0.342 15.6966 0.34C15.6098 0.234911 15.5012 0.150037 15.3782 0.0913105C15.2552 0.032584 15.1209 0.00142139 14.9846 0H1.0186C0.879825 0.00224243 0.743234 0.0349295 0.618477 0.0957527C0.49372 0.156576 0.383841 0.244052 0.2966 0.352L0.292601 0.348C0.103861 0.566371 0 0.845367 0 1.134C0 1.42263 0.103861 1.70163 0.292601 1.92L7.2906 9.674C7.37772 9.77612 7.48596 9.85813 7.60784 9.91436C7.72973 9.97059 7.86237 9.99971 7.9966 9.99971C8.13083 9.99971 8.26347 9.97059 8.38536 9.91436C8.50724 9.85813 8.61548 9.77612 8.7026 9.674Z" />
        </svg>
      )
    case 'learn':
      return (
        <svg viewBox="0 0 27 31" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 18.0833C13.3875 18.0833 13.275 18.0833 13.1625 17.9542L0.7875 12.7875C0.3375 12.6583 0 12.1417 0 11.625C0 11.1083 0.3375 10.5917 0.7875 10.4625L13.1625 5.29583C13.3875 5.16667 13.725 5.16667 13.95 5.29583L26.325 10.4625C26.6625 10.5917 27 11.1083 27 11.625C27 12.1417 26.6625 12.6583 26.2125 12.7875L13.8375 17.9542C13.725 18.0833 13.6125 18.0833 13.5 18.0833ZM4.3875 11.625L13.5 15.3708L22.6125 11.625L13.5 7.87917L4.3875 11.625Z" />
          <path d="M21.375 25.8333H13.5C12.825 25.8333 12.375 25.3167 12.375 24.5417C12.375 23.7667 12.825 23.25 13.5 23.25H20.25C20.1375 19.8917 19.4625 17.05 18.3375 14.9833C18 14.3375 18.225 13.5625 18.675 13.175C19.2375 12.7875 19.9125 13.0458 20.25 13.5625C21.7125 16.275 22.5 20.0208 22.5 24.4125C22.5 25.3167 22.05 25.8333 21.375 25.8333Z" />
          <path d="M13.5 25.8333H5.625C4.95 25.8333 4.5 25.3167 4.5 24.5417C4.5 20.15 5.2875 16.4042 6.75 13.6917C7.0875 13.0458 7.7625 12.9167 8.325 13.3042C8.8875 13.6917 9 14.4667 8.6625 15.1125C7.5375 17.1792 6.8625 20.0208 6.75 23.3792H13.5C14.175 23.3792 14.625 23.8958 14.625 24.6708C14.625 25.4458 14.175 25.8333 13.5 25.8333ZM24.75 25.8333C24.075 25.8333 23.625 25.3167 23.625 24.5417V11.625C23.625 10.85 24.075 10.3333 24.75 10.3333C25.425 10.3333 25.875 10.85 25.875 11.625V24.5417C25.875 25.3167 25.425 25.8333 24.75 25.8333Z" />
        </svg>
      )
    case 'faq':
      return (
        <svg viewBox="0 0 34 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 4C14.4783 4 12.0132 4.70379 9.91649 6.02236C7.81976 7.34094 6.18556 9.21509 5.22054 11.4078C4.25552 13.6005 4.00303 16.0133 4.49499 18.3411C4.98695 20.6689 6.20127 22.8071 7.98439 24.4853C9.76751 26.1635 12.0393 27.3064 14.5126 27.7694C16.9859 28.2324 19.5495 27.9948 21.8792 27.0866C24.209 26.1783 26.2003 24.6402 27.6012 22.6668C29.0022 20.6935 29.75 18.3734 29.75 16C29.75 12.8174 28.4067 9.76515 26.0156 7.51472C23.6245 5.26428 20.3815 4 17 4ZM17 26C14.8986 26 12.8443 25.4135 11.0971 24.3147C9.3498 23.2159 7.98797 21.6541 7.18379 19.8268C6.3796 17.9996 6.16919 15.9889 6.57916 14.0491C6.98913 12.1093 8.00106 10.3275 9.487 8.92893C10.9729 7.53041 12.8661 6.578 14.9272 6.19215C16.9882 5.8063 19.1246 6.00433 21.066 6.7612C23.0075 7.51808 24.6669 8.79981 25.8344 10.4443C27.0019 12.0888 27.625 14.0222 27.625 16C27.625 18.6522 26.5056 21.1957 24.513 23.0711C22.5204 24.9464 19.8179 26 17 26Z" />
          <path d="M17.9137 9.09999C16.8935 8.8904 15.827 9.04165 14.9177 9.52488C14.0084 10.0081 13.32 10.7895 12.9837 11.72C12.9376 11.8446 12.9187 11.9767 12.9281 12.1084C12.9375 12.2401 12.9751 12.3686 13.0386 12.4863C13.1021 12.604 13.1902 12.7083 13.2977 12.7932C13.4051 12.878 13.5296 12.9416 13.6637 12.98C13.7977 13.0202 13.9387 13.035 14.0788 13.0235C14.2188 13.012 14.355 12.9745 14.4795 12.9131C14.6041 12.8517 14.7144 12.7677 14.8042 12.6659C14.8939 12.5641 14.9613 12.4465 15.0025 12.32C15.1759 11.8685 15.516 11.4908 15.9607 11.2558C16.4055 11.0208 16.9252 10.9442 17.425 11.04C17.9115 11.1786 18.3292 11.4768 18.6021 11.8805C18.875 12.2841 18.9851 12.7665 18.9125 13.24C18.8003 13.6875 18.5278 14.0849 18.1407 14.3654C17.7537 14.6459 17.2758 14.7923 16.7875 14.78C16.6376 14.7629 16.4857 14.7761 16.3416 14.8187C16.1976 14.8613 16.0649 14.9322 15.9523 15.0268C15.8397 15.1214 15.7498 15.2375 15.6887 15.3674C15.6275 15.4973 15.5964 15.6379 15.5975 15.78V18.9C15.5975 19.1652 15.7094 19.4196 15.9087 19.6071C16.1079 19.7946 16.3782 19.9 16.66 19.9C16.7985 19.9027 16.9362 19.8793 17.065 19.8312C17.1938 19.7832 17.3111 19.7114 17.41 19.6201C17.509 19.5289 17.5876 19.4199 17.6412 19.2997C17.6949 19.1795 17.7225 19.0504 17.7225 18.92V16.72C18.5382 16.5583 19.2854 16.1744 19.871 15.6161C20.4566 15.0578 20.8549 14.3497 21.0162 13.58C21.1776 12.6045 20.9501 11.6074 20.3773 10.7803C19.8046 9.95327 18.9271 9.35478 17.9137 9.09999ZM16.5962 20.78C16.3194 20.7944 16.0579 20.9043 15.8619 21.0888C15.6659 21.2734 15.549 21.5194 15.5337 21.78V22C15.5364 22.1252 15.5657 22.2486 15.6198 22.363C15.6739 22.4774 15.7517 22.5805 15.8487 22.6662C15.9457 22.7519 16.0599 22.8185 16.1846 22.8621C16.3094 22.9057 16.4421 22.9253 16.575 22.92C16.8589 22.9049 17.1262 22.7893 17.3232 22.5964C17.5203 22.4035 17.6326 22.1476 17.6375 21.88V21.72C17.6376 21.5931 17.6104 21.4675 17.5576 21.3508C17.5048 21.234 17.4274 21.1286 17.3301 21.0408C17.2328 20.9529 17.1176 20.8845 16.9915 20.8397C16.8654 20.7949 16.7309 20.7746 16.5962 20.78Z" />
        </svg>
      )
    case 'mainpage':
      return (
        <svg viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.39583 0.375H4.02083C3.0539 0.375 2.12657 0.759113 1.44284 1.44284C0.759113 2.12657 0.375 3.0539 0.375 4.02083C0.375 4.98777 0.759113 5.9151 1.44284 6.59883C2.12657 7.28255 3.0539 7.66667 4.02083 7.66667H8.39583C9.36277 7.66667 10.2901 7.28255 10.9738 6.59883C11.6576 5.9151 12.0417 4.98777 12.0417 4.02083C12.0417 3.0539 11.6576 2.12657 10.9738 1.44284C10.2901 0.759113 9.36277 0.375 8.39583 0.375ZM8.39583 6.20833H4.02083C3.44067 6.20833 2.88427 5.97787 2.47404 5.56763C2.0638 5.15739 1.83333 4.60099 1.83333 4.02083C1.83333 3.44067 2.0638 2.88427 2.47404 2.47404C2.88427 2.0638 3.44067 1.83333 4.02083 1.83333H8.39583C8.976 1.83333 9.53239 2.0638 9.94263 2.47404C10.3529 2.88427 10.5833 3.44067 10.5833 4.02083C10.5833 4.60099 10.3529 5.15739 9.94263 5.56763C9.53239 5.97787 8.976 6.20833 8.39583 6.20833ZM8.39583 10.5833H4.02083C3.0539 10.5833 2.12657 10.9674 1.44284 11.6512C0.759113 12.3349 0.375 13.2622 0.375 14.2292V22.9792C0.375 23.9461 0.759113 24.8734 1.44284 25.5572C2.12657 26.2409 3.0539 26.625 4.02083 26.625H8.39583C9.36277 26.625 10.2901 26.2409 10.9738 25.5572C11.6576 24.8734 12.0417 23.9461 12.0417 22.9792V14.2292C12.0417 13.2622 11.6576 12.3349 10.9738 11.6512C10.2901 10.9674 9.36277 10.5833 8.39583 10.5833ZM10.5833 22.9792C10.5833 23.5593 10.3529 24.1157 9.94263 24.526C9.53239 24.9362 8.976 25.1667 8.39583 25.1667H4.02083C3.44067 25.1667 2.88427 24.9362 2.47404 24.526C2.0638 24.1157 1.83333 23.5593 1.83333 22.9792V14.2292C1.83333 13.649 2.0638 13.0926 2.47404 12.6824C2.88427 12.2721 3.44067 12.0417 4.02083 12.0417H8.39583C8.976 12.0417 9.53239 12.2721 9.94263 12.6824C10.3529 13.0926 10.5833 13.649 10.5833 14.2292V22.9792ZM22.9792 19.3333H18.6042C17.6372 19.3333 16.7099 19.7174 16.0262 20.4012C15.3424 21.0849 14.9583 22.0122 14.9583 22.9792C14.9583 23.9461 15.3424 24.8734 16.0262 25.5572C16.7099 26.2409 17.6372 26.625 18.6042 26.625H22.9792C23.9461 26.625 24.8734 26.2409 25.5572 25.5572C26.2409 24.8734 26.625 23.9461 26.625 22.9792C26.625 22.0122 26.2409 21.0849 25.5572 20.4012C24.8734 19.7174 23.9461 19.3333 22.9792 19.3333ZM22.9792 25.1667H18.6042C18.024 25.1667 17.4676 24.9362 17.0574 24.526C16.6471 24.1157 16.4167 23.5593 16.4167 22.9792C16.4167 22.399 16.6471 21.8426 17.0574 21.4324C17.4676 21.0221 18.024 20.7917 18.6042 20.7917H22.9792C23.5593 20.7917 24.1157 21.0221 24.526 21.4324C24.9362 21.8426 25.1667 22.399 25.1667 22.9792C25.1667 23.5593 24.9362 24.1157 24.526 24.526C24.1157 24.9362 23.5593 25.1667 22.9792 25.1667ZM22.9792 0.375H18.6042C17.6372 0.375 16.7099 0.759113 16.0262 1.44284C15.3424 2.12657 14.9583 3.0539 14.9583 4.02083V12.7708C14.9583 13.7378 15.3424 14.6651 16.0262 15.3488C16.7099 16.0326 17.6372 16.4167 18.6042 16.4167H22.9792C23.9461 16.4167 24.8734 16.0326 25.5572 15.3488C26.2409 14.6651 26.625 13.7378 26.625 12.7708V4.02083C26.625 3.0539 26.2409 2.12657 25.5572 1.44284C24.8734 0.759113 23.9461 0.375 22.9792 0.375ZM25.1667 12.7708C25.1667 13.351 24.9362 13.9074 24.526 14.3176C24.1157 14.7279 23.5593 14.9583 22.9792 14.9583H18.6042C18.024 14.9583 17.4676 14.7279 17.0574 14.3176C16.6471 13.9074 16.4167 13.351 16.4167 12.7708V4.02083C16.4167 3.44067 16.6471 2.88427 17.0574 2.47404C17.4676 2.0638 18.024 1.83333 18.6042 1.83333H22.9792C23.5593 1.83333 24.1157 2.0638 24.526 2.47404C24.9362 2.88427 25.1667 3.44067 25.1667 4.02083V12.7708Z" />
        </svg>
      )
    case 'more':
      return (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 47.9C10.8 47.9 0.0999756 37.2 0.0999756 24C0.0999756 10.8 10.8 0.100006 24 0.100006C37.2 0.100006 47.9 10.8 47.9 24C47.9 37.2 37.2 47.9 24 47.9ZM24 2.70001C12.3 2.70001 2.69998 12.3 2.69998 24C2.69998 35.7 12.3 45.3 24 45.3C35.7 45.3 45.3 35.7 45.3 24C45.3 12.3 35.7 2.70001 24 2.70001Z" />
          <path d="M11.2999 22.6H36.6999V25.4H11.2999V22.6Z" />
          <path d="M22.6 11.3H25.4V36.7H22.6V11.3Z" />
        </svg>
      )
    case 'options':
      return (
        <svg viewBox="0 0 18 4" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0C8.60444 0 8.21776 0.117298 7.88886 0.337061C7.55996 0.556824 7.30362 0.869181 7.15224 1.23463C7.00087 1.60009 6.96126 2.00222 7.03843 2.39018C7.1156 2.77814 7.30608 3.13451 7.58579 3.41421C7.86549 3.69392 8.22186 3.8844 8.60982 3.96157C8.99778 4.03874 9.39992 3.99913 9.76537 3.84776C10.1308 3.69638 10.4432 3.44004 10.6629 3.11114C10.8827 2.78224 11 2.39556 11 2C11 1.46957 10.7893 0.96086 10.4142 0.585787C10.0391 0.210714 9.53043 0 9 0ZM2 0C1.60444 0 1.21776 0.117298 0.88886 0.337061C0.559962 0.556824 0.303617 0.869181 0.152242 1.23463C0.000866562 1.60009 -0.0387401 2.00222 0.0384303 2.39018C0.115601 2.77814 0.306082 3.13451 0.585787 3.41421C0.865492 3.69392 1.22186 3.8844 1.60982 3.96157C1.99778 4.03874 2.39992 3.99913 2.76537 3.84776C3.13082 3.69638 3.44318 3.44004 3.66294 3.11114C3.8827 2.78224 4 2.39556 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM16 0C15.6044 0 15.2178 0.117298 14.8889 0.337061C14.56 0.556824 14.3036 0.869181 14.1522 1.23463C14.0009 1.60009 13.9613 2.00222 14.0384 2.39018C14.1156 2.77814 14.3061 3.13451 14.5858 3.41421C14.8655 3.69392 15.2219 3.8844 15.6098 3.96157C15.9978 4.03874 16.3999 3.99913 16.7654 3.84776C17.1308 3.69638 17.4432 3.44004 17.6629 3.11114C17.8827 2.78224 18 2.39556 18 2C18 1.46957 17.7893 0.96086 17.4142 0.585787C17.0391 0.210714 16.5304 0 16 0Z" />
        </svg>
      )
    case 'profile':
      return (
        <svg viewBox="0 0 31 27" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5 13.5029C12.0807 13.5029 9.3 11.0815 9.3 8.10408C9.3 5.12663 12.0807 2.70525 15.5 2.70525C18.9193 2.70525 21.7 5.12663 21.7 8.10408C21.7 11.0815 18.9193 13.5029 15.5 13.5029ZM21.3249 14.4112C22.4101 13.6541 23.286 12.6942 23.8875 11.6024C24.489 10.5107 24.8009 9.315 24.8 8.10408C24.8011 6.73487 24.4036 5.38783 23.6445 4.18874C22.8853 2.98966 21.7895 1.97761 20.4593 1.24746C19.1291 0.517312 17.6081 0.092835 16.0383 0.0135785C14.4686 -0.065678 12.9014 0.202986 11.4832 0.794373C10.065 1.38576 8.84221 2.28061 7.92904 3.39526C7.01587 4.50992 6.44214 5.80793 6.26154 7.16809C6.08094 8.52824 6.29932 9.90602 6.89629 11.1727C7.49326 12.4394 8.44933 13.5536 9.67511 14.4112C4.00366 16.2671 0 20.8521 0 27H3.1C3.1 20.2515 8.66295 16.2023 15.5 16.2023C22.337 16.2023 27.9 20.2515 27.9 27H31C31 20.8521 26.9963 16.2671 21.3249 14.4112Z"
          />
        </svg>
      )
    case 'register':
      return (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24.9745 17.685C24.654 17.5258 24.2833 17.5004 23.944 17.6143C23.6048 17.7283 23.3246 17.9722 23.1651 18.2925C22.3104 20.0181 21.0099 21.4838 19.3981 22.5379C17.7863 23.5921 15.922 24.1962 13.9982 24.2878C12.0743 24.3793 10.161 23.955 8.45636 23.0588C6.75171 22.1625 5.31773 20.827 4.30294 19.1904C3.28816 17.5538 2.72948 15.6757 2.68478 13.7507C2.64007 11.8256 3.11097 9.92367 4.04869 8.24176C4.9864 6.55985 6.35684 5.15917 8.01805 4.1848C9.67926 3.21042 11.5708 2.69779 13.4968 2.70001C15.5103 2.69129 17.4855 3.25032 19.1956 4.31292C20.9057 5.37553 22.2815 6.89866 23.1651 8.7075C23.3263 9.02974 23.6089 9.27478 23.9507 9.38871C24.2926 9.50263 24.6657 9.47612 24.988 9.315C25.3103 9.15388 25.5554 8.87136 25.6694 8.52957C25.7833 8.18779 25.7568 7.81474 25.5957 7.49251C24.2408 4.76651 22.0041 2.57832 19.2488 1.28309C16.4935 -0.0121397 13.3812 -0.338379 10.417 0.357325C7.4529 1.05303 4.81094 2.72984 2.91997 5.11559C1.02899 7.50134 0 10.456 0 13.5C0 16.544 1.02899 19.4987 2.91997 21.8844C4.81094 24.2702 7.4529 25.947 10.417 26.6427C13.3812 27.3384 16.4935 27.0121 19.2488 25.7169C22.0041 24.4217 24.2408 22.2335 25.5957 19.5075C25.6761 19.3473 25.7239 19.1728 25.7362 18.994C25.7485 18.8152 25.725 18.6357 25.6672 18.4661C25.6094 18.2964 25.5184 18.14 25.3994 18.0059C25.2805 17.8718 25.1361 17.7627 24.9745 17.685ZM25.6497 12.15H12.7001L15.8059 9.0585C15.9318 8.93263 16.0316 8.7832 16.0998 8.61874C16.1679 8.45428 16.203 8.27801 16.203 8.1C16.203 7.92199 16.1679 7.74573 16.0998 7.58127C16.0316 7.41681 15.9318 7.26738 15.8059 7.14151C15.68 7.01563 15.5305 6.91579 15.366 6.84767C15.2015 6.77954 15.0252 6.74448 14.8471 6.74448C14.6691 6.74448 14.4928 6.77954 14.3283 6.84767C14.1638 6.91579 14.0143 7.01563 13.8884 7.14151L8.48715 12.5415C8.36422 12.6699 8.26786 12.8213 8.20359 12.987C8.06853 13.3157 8.06853 13.6843 8.20359 14.013C8.26786 14.1787 8.36422 14.3301 8.48715 14.4585L13.8884 19.8585C14.014 19.985 14.1633 20.0855 14.3278 20.154C14.4924 20.2225 14.6689 20.2578 14.8471 20.2578C15.0254 20.2578 15.2019 20.2225 15.3664 20.154C15.531 20.0855 15.6803 19.985 15.8059 19.8585C15.9324 19.733 16.0329 19.5837 16.1014 19.4192C16.17 19.2547 16.2053 19.0782 16.2053 18.9C16.2053 18.7218 16.17 18.5453 16.1014 18.3808C16.0329 18.2163 15.9324 18.067 15.8059 17.9415L12.7001 14.85H25.6497C26.0078 14.85 26.3513 14.7078 26.6045 14.4546C26.8577 14.2014 27 13.858 27 13.5C27 13.142 26.8577 12.7986 26.6045 12.5454C26.3513 12.2922 26.0078 12.15 25.6497 12.15Z" />
        </svg>
      )
    case 'registerdefault':
      return (
<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>i</title>
  <g id="Complete">
    <g id="user-add">
      <g>
        <path d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <circle cx="9" cy="7" r="4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <line x1="17" y1="11" x2="23" y2="11" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <line x1="20" y1="8" x2="20" y2="14" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      </g>
    </g>
  </g>
</svg>
      )
    case 'search':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_94_143)">
            <path d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09001 2.53002 2.53002 6.09001 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.50002C5.00002 7.01002 7.01002 5.00002 9.50002 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.50002 14Z" />
          </g>
          <defs>
            <clipPath id="clip0_94_143">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'teach':
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_39_157)">
            <path d="M9.5 0C8.70435 0 7.94129 0.31607 7.37868 0.87868C6.81607 1.44129 6.5 2.20435 6.5 3C6.5 3.79565 6.81607 4.55871 7.37868 5.12132C7.94129 5.68393 8.70435 6 9.5 6C10.2956 6 11.0587 5.68393 11.6213 5.12132C12.1839 4.55871 12.5 3.79565 12.5 3C12.5 2.20435 12.1839 1.44129 11.6213 0.87868C11.0587 0.31607 10.2956 0 9.5 0ZM16 1C15.8674 1 15.7402 1.05268 15.6464 1.14645C15.5527 1.24021 15.5 1.36739 15.5 1.5V5.766L12.227 7H5C3.07 7 1.5 8.586 1.5 10.516V17.5C1.5 17.8978 1.65804 18.2794 1.93934 18.5607C2.22064 18.842 2.60218 19 3 19C3.39782 19 3.77936 18.842 4.06066 18.5607C4.34196 18.2794 4.5 17.8978 4.5 17.5V10.516C4.5 10.24 4.724 10 5 10H5.5V30.5C5.5 30.8978 5.65804 31.2794 5.93934 31.5607C6.22064 31.842 6.60218 32 7 32C7.39782 32 7.77936 31.842 8.06066 31.5607C8.34196 31.2794 8.5 30.8978 8.5 30.5V23H10.5V30.5C10.5 30.8978 10.658 31.2794 10.9393 31.5607C11.2206 31.842 11.6022 32 12 32C12.3978 32 12.7794 31.842 13.0607 31.5607C13.342 31.2794 13.5 30.8978 13.5 30.5V9.727L15.5 8.971V13.5C15.5 13.6326 15.5527 13.7598 15.6464 13.8536C15.7402 13.9473 15.8674 14 16 14H30C30.1326 14 30.2598 13.9473 30.3536 13.8536C30.4473 13.7598 30.5 13.6326 30.5 13.5V1.5C30.5 1.36739 30.4473 1.24021 30.3536 1.14645C30.2598 1.05268 30.1326 1 30 1H16ZM16.5 2H29.5V13H16.5V8.594L19.654 7.402C19.8381 7.33253 20.0067 7.22748 20.1503 7.09284C20.2938 6.9582 20.4094 6.79661 20.4904 6.6173C20.5715 6.43799 20.6164 6.24447 20.6227 6.04779C20.629 5.85111 20.5965 5.65511 20.527 5.471C20.4575 5.28689 20.3525 5.11826 20.2178 4.97475C20.0832 4.83123 19.9216 4.71564 19.7423 4.63458C19.3802 4.47086 18.9678 4.4577 18.596 4.598L16.5 5.387V2ZM22 3C21.8674 3 21.7402 3.05268 21.6464 3.14645C21.5527 3.24021 21.5 3.36739 21.5 3.5C21.5 3.63261 21.5527 3.75979 21.6464 3.85355C21.7402 3.94732 21.8674 4 22 4H28C28.1326 4 28.2598 3.94732 28.3536 3.85355C28.4473 3.75979 28.5 3.63261 28.5 3.5C28.5 3.36739 28.4473 3.24021 28.3536 3.14645C28.2598 3.05268 28.1326 3 28 3H22ZM22 5C21.8674 5 21.7402 5.05268 21.6464 5.14645C21.5527 5.24021 21.5 5.36739 21.5 5.5C21.5 5.63261 21.5527 5.75979 21.6464 5.85355C21.7402 5.94732 21.8674 6 22 6H25C25.1326 6 25.2598 5.94732 25.3536 5.85355C25.4473 5.75979 25.5 5.63261 25.5 5.5C25.5 5.36739 25.4473 5.24021 25.3536 5.14645C25.2598 5.05268 25.1326 5 25 5H22Z" />
          </g>
          <defs>
            <clipPath id="clip0_39_157">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'tech-support':
      return (
        <svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.07 16.57C28.7385 16.57 28.4205 16.4383 28.1861 16.2039C27.9517 15.9695 27.82 15.6515 27.82 15.32V11.79C27.82 6.79 23.2 2.79 17.52 2.79C11.84 2.79 7.22 6.84 7.22 11.79V15.32C7.22 15.6515 7.08831 15.9695 6.85388 16.2039C6.61946 16.4383 6.30152 16.57 5.97 16.57C5.63848 16.57 5.32054 16.4383 5.08612 16.2039C4.8517 15.9695 4.72 15.6515 4.72 15.32V11.79C4.72 5.43 10.47 0.25 17.52 0.25C24.57 0.25 30.32 5.43 30.32 11.79V15.32C30.3213 15.4845 30.2899 15.6477 30.2276 15.7999C30.1652 15.9522 30.0732 16.0905 29.9569 16.2069C29.8405 16.3232 29.7022 16.4152 29.5499 16.4776C29.3977 16.5399 29.2345 16.5713 29.07 16.57Z" />
          <path d="M25.69 28.33C25.3585 28.33 25.0405 28.1983 24.8061 27.9639C24.5717 27.7295 24.44 27.4115 24.44 27.08V15.21C24.4504 14.8855 24.5867 14.5777 24.82 14.3519C25.0533 14.126 25.3653 13.9998 25.69 14C30 14 33.51 17.23 33.51 21.19C33.51 25.15 30 28.33 25.69 28.33ZM26.94 16.59V25.7C28.0344 25.5188 29.0339 24.9687 29.7724 24.141C30.511 23.3133 30.9441 22.2579 31 21.15C30.9464 20.0404 30.5142 18.9826 29.7754 18.1529C29.0367 17.3232 28.036 16.7716 26.94 16.59ZM9.30999 28.33C4.99999 28.33 1.48999 25.11 1.48999 21.15C1.48999 17.19 4.99999 14 9.30999 14C9.64151 14 9.95945 14.1317 10.1939 14.3661C10.4283 14.6005 10.56 14.9185 10.56 15.25V27.08C10.56 27.4115 10.4283 27.7295 10.1939 27.9639C9.95945 28.1983 9.64151 28.33 9.30999 28.33ZM8.05999 16.59C6.964 16.7716 5.96329 17.3232 5.22455 18.1529C4.48581 18.9826 4.05363 20.0404 3.99999 21.15C4.05585 22.2579 4.48903 23.3133 5.22758 24.141C5.96613 24.9687 6.9656 25.5188 8.05999 25.7V16.59Z" />
          <path d="M25.28 32.4H21.14C20.8085 32.4 20.4906 32.2683 20.2561 32.0339C20.0217 31.7995 19.89 31.4815 19.89 31.15C19.89 30.8185 20.0217 30.5005 20.2561 30.2661C20.4906 30.0317 20.8085 29.9 21.14 29.9H25.28C25.9271 29.9 26.5478 29.6429 27.0054 29.1853C27.4629 28.7278 27.72 28.1071 27.72 27.46V26.91C27.72 26.5785 27.8517 26.2605 28.0861 26.0261C28.3206 25.7917 28.6385 25.66 28.97 25.66C29.3015 25.66 29.6195 25.7917 29.8539 26.0261C30.0883 26.2605 30.22 26.5785 30.22 26.91V27.46C30.22 28.7702 29.6996 30.0267 28.7731 30.9531C27.8467 31.8795 26.5902 32.4 25.28 32.4Z" />
          <path d="M19 34.75H16.53C15.6229 34.75 14.7531 34.3897 14.1117 33.7483C13.4703 33.1069 13.11 32.237 13.11 31.33V31.19C13.1126 30.2847 13.4741 29.4174 14.1152 28.7782C14.7563 28.1389 15.6247 27.78 16.53 27.78H19C19.9044 27.78 20.7717 28.1393 21.4112 28.7788C22.0507 29.4183 22.41 30.2856 22.41 31.19V31.33C22.41 32.2353 22.051 33.1037 21.4118 33.7448C20.7726 34.3859 19.9053 34.7474 19 34.75ZM16.55 30.28C16.3077 30.28 16.0752 30.3755 15.903 30.5459C15.7307 30.7163 15.6326 30.9477 15.63 31.19V31.33C15.63 31.574 15.7269 31.808 15.8994 31.9805C16.072 32.1531 16.306 32.25 16.55 32.25H19C19.2422 32.2474 19.4737 32.1493 19.6441 31.977C19.8144 31.8048 19.91 31.5723 19.91 31.33V31.19C19.91 30.9487 19.8141 30.7172 19.6435 30.5465C19.4728 30.3759 19.2413 30.28 19 30.28H16.55Z" />
        </svg>
      )
    case 'wallet':
      return (
        <svg viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.375 22.5C29.375 23.2459 29.0458 23.9613 28.4597 24.4888C27.8737 25.0162 27.0788 25.3125 26.25 25.3125H3.75C3.33962 25.3125 2.93326 25.2398 2.55411 25.0984C2.17497 24.9571 1.83047 24.7499 1.54029 24.4888C0.95424 23.9613 0.625 23.2459 0.625 22.5V6.18752C0.625 5.59078 0.888392 5.01848 1.35723 4.59652C1.82607 4.17457 2.46196 3.93752 3.125 3.93752H15.7319L20.7938 2.28714C20.9477 2.23671 21.1175 2.24326 21.2661 2.30537C21.4146 2.36747 21.5298 2.48006 21.5862 2.61845L22.1194 3.93752H24.375C25.038 3.93752 25.6739 4.17457 26.1428 4.59652C26.6116 5.01848 26.875 5.59078 26.875 6.18752V7.31252C27.538 7.31252 28.1739 7.54957 28.6428 7.97152C29.1116 8.39348 29.375 8.96578 29.375 9.56252V22.5ZM3.125 5.06252C2.79348 5.06252 2.47554 5.18104 2.24112 5.39202C2.0067 5.603 1.875 5.88915 1.875 6.18752C1.875 6.48588 2.0067 6.77203 2.24112 6.98301C2.47554 7.19399 2.79348 7.31252 3.125 7.31252H5.39625C5.40438 7.3097 5.40938 7.30351 5.4175 7.3007L12.2812 5.06252H3.125ZM21.2987 5.16433L20.635 3.51958L19.3525 3.93752H19.3544L15.9081 5.06252H15.9019L9.0025 7.31252H22.1663L21.2987 5.16433ZM25.625 6.18752C25.625 5.88915 25.4933 5.603 25.2589 5.39202C25.0245 5.18104 24.7065 5.06252 24.375 5.06252H22.5731L23.4819 7.31252H25.625V6.18752ZM26.875 8.43752H3.125C2.6675 8.43752 2.24375 8.31883 1.875 8.12533V22.5C1.875 22.9476 2.07254 23.3768 2.42417 23.6933C2.77581 24.0097 3.25272 24.1875 3.75 24.1875H26.25C26.7473 24.1875 27.2242 24.0097 27.5758 23.6933C27.9275 23.3768 28.125 22.9476 28.125 22.5V18.5625H25.625C24.962 18.5625 24.3261 18.3255 23.8572 17.9035C23.3884 17.4815 23.125 16.9093 23.125 16.3125C23.125 15.7158 23.3884 15.1435 23.8572 14.7215C24.3261 14.2996 24.962 14.0625 25.625 14.0625H28.125V9.56252C28.125 9.26415 27.9933 8.978 27.7589 8.76702C27.5245 8.55604 27.2065 8.43752 26.875 8.43752ZM28.125 17.4375V15.1875H25.625C25.2935 15.1875 24.9755 15.306 24.7411 15.517C24.5067 15.728 24.375 16.0141 24.375 16.3125C24.375 16.6109 24.5067 16.897 24.7411 17.108C24.9755 17.319 25.2935 17.4375 25.625 17.4375H28.125ZM25.625 15.75H26.875V16.875H25.625V15.75Z"
          />
        </svg>
      )
    default:
      return <svg></svg>
  }
}

export default Sprite
