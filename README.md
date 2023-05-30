
## Project Job Interview Backend

Test Back-end 'Job Interview Purple'🚀

    
### Tech Stack

**database:** mySql

**Server:** Node, Fastify, Docker

## MySQL Connection

```bash
MYSQL_DATABASE = job_interview_db
MYSQL_USER = host
MYSQL_ROOT_PASSWORD = host
MYSQL_PASSWORD = host
MYSQL_HOST = 0.0.0.0
MY_SQL_PORT = 3306
```

## Quickstart

Run project with Makefile

```bash
  make
```
description
-  `cd core_app` and run `yarn build` build and complie core_app (node)
- `docker-compose down`
- `docker-compose up -d`



## API Reference

 - **Get all data with limit and offset, to use show in card list:**

   เรียกดูข้อมูลผู้นัดสัมภาษณ์ทั้งหมด โดยสามารถกำหนดจำนวนข้อมูลที่จะเรียกได้ (See More)

    ```bash
      GET /explorer/job_interview
    ```

    General Search Parameter
    | Parameter | Data Type  | Required / Optional    | Description      |
    | :-------- | :------- | :------------- | :------------------------- |
    | `limit` | `number` | optional    |  จำนวนข้อมูลที่จะแสดง *ใช้สำหรับการกด See More* |
    | `offset` | `number` | optional    |  จำนวนข้อมูลที่จะเริ่ม หรือถูกข้าม *ใช้สำหรับการกด See     More*|

###
- **Get all type job status data, to use select status in front-end:**

    เรียกดูข้อมูลสถานะทั้งหมดต่างๆ ไว้สำหรับใช้ในการเลือกสถานะ

    ```bash
      GET /type_job_interview_status
    ```
###

- **Update job interview status user by job master id:**
  
  อัพเดต แก้ไขข้อมูลสถานะการสัมภาษณ์งาน
    ```bash
      PUT /job_interview/:job_master_id
    ```
    Path Parameters
    | Parameter | Data Type  | Required / Optional    | Description      |
    | :-------- | :------- | :------------- | :------------------------- |
    | `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

     Request Body
    | Body | Data Type  | Required / Optional    | Description      |
    | :-------- | :------- | :------------- | :------------------------- |
    | `job_interview_status_id` | `number` | Required    |  อัพเดตสถานะของ user  ที่มาจากการเลือกการ์ด |

###

- **Update is_active user to 'n' by job_master_id to archive card user:**
  
    อัพเดต เพื่อจัดเก็บการ์ดผู้สัมภาษณ์ที่ระบุ ทำให้เมื่อเรียกข้อมูลจะไม่แสดงผู้ใช้ที่จัดเก็บการ์ด ( สถานะใน db คือ is_active = 'n' )

    ```bash
      PUT /job_interview/archive/:job_master_id
    ```
    Path Parameters
    | Parameter | Data Type  | Required / Optional    | Description      |
    | :-------- | :------- | :------------- | :------------------------- |
    | `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

###

- **Get all data in user by job_master_id and get data detail (Comment.) with limit and   offset:**
    
    เรียกดูข้อมูลการคอมเม้นท์และรายละเอียดต่างๆ ของผู้คอมเม้นท์ โดยสามารถกำหนดจำนวนข้อมูลที่จะเรียกได้
    ```bash
      GET /job_interview/detail/:job_master_id
    ```
    General Search Parameter
    | Parameter | Data Type  | Required / Optional    | Description      |
    | :-------- | :------- | :------------- | :------------------------- |
    | `limit` | `number` | optional    |  จำนวนข้อมูลที่จะแสดง *ใช้สำหรับการกด See More* |
    | `offset` | `number` | optional    |  จำนวนข้อมูลที่จะเริ่ม หรือถูกข้าม *ใช้สำหรับการกด See     More*|

    Path Parameters
    | Parameter | Data Type  | Required / Optional    | Description      |
    | :-------- | :------- | :------------- | :------------------------- |
    | `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

###

- **Create comment by job_master_id in job_interview_detail:**

    สร้าง หรือเขียนคอมเม้นท์ในหน้ารายละเอียดของผู้สัมภาษณ์นั้นๆ โดยกรอกชื่อและข้อความที่ต้องการวิจารณ์
    ```bash
      PUT /job_interview/detail/:job_master_id'
    ```
    Path Parameters
    | Parameter | Data Type  | Required / Optional    | Description      |
    | :-------- | :------- | :------------- | :------------------------- |
    | `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

    Request Body
    | Body | Data Type  | Required / Optional    | Description      |
    | :-------- | :------- | :------------- | :------------------------- |
    | `title_comment_user_name` | `string` | Optional    |  name เจ้าของ comment |
    | `body_comment` | `string` | Optional    |  รายละเอียด comment |



## Database
![database](https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81q1JGjZHAx7OxQqiFs2n2lzLoEkR9PBvYSn0RQhOqzvd8p1p3kISqIYHhqo26WTTSN4npjxxpU1TIeaUSI-GCiYkzY2Pw=w1865-h929)

https://drive.google.com/file/d/1AmJrGxm0VBOqPCF47_T64cm6CXpOoL9I/view?usp=sharing

## Screenshot
https://drive.google.com/drive/folders/1rNokn7-piAl74B5EFcMFrAUoswHq_2b0?usp=sharing

```bash
GET /explorer/job_interview
```
![pic1](https://lh3.googleusercontent.com/fife/APg5EOZ0DfqWn5fH3iqbgowrsvb9S8-I6-2NQVVmgG76lYMgUNsrrJYJwV469Ov4j1ZDG-VcuhmxI5WTU0SVwxP58E7sUp-OLTOX98BRzzDvoZ1sHUnhJZ_8h5jeeD7GYRzNFo4U5rZr2Z1Jre0-R_FfE6A65GJUMJpIFeOR7rwaULzbGzqDt1Qw1W51AoNsYXiQ-3WSUzFKfBBA4lzBMxR94UL0Do1fjEvXCxS9BXsMsQesyiXdhWnf3Ju_Qi0m6gopCSDir6w0U7P97iLA_TUQQHC0XeJ1URy48LH6r_C7zsnGxc0l15-eJjfUuoWKnZ_WBg-w_X7RXooLDTe5j9IFRxRKFvvyvi6AKZGPPMC5gPHeTuiQc8o3z4zkfLJ4rGJ6b--yvjZIM-vZ19HfirGvwGQPplKQlrDRs4D5BRVk-PYv2ojeTPUtQsyR8LM1_Zyibo2rtptDHY9Ak6A8BUH0Cg4IO91JiC1_MOZfBATu3hB_uVDxu-iIXAj3-8QpqPZkpAVwwaKn3iTkl_c89oRQYY2zemmIMsB_z-MJCLztl1DIzP57Bp--dRU5HAVt_kqrw656dyHe3YNnGRM8ACwPnoJupOTsp_LWegtc7X4bsCf6bazbonVS6nx6PbzkUcIxJdrvXVtsRl9WgiluOeLKemzHtRxIm3U1h4ZMDENvhkXR-2fJBrJI5v01gRP1krGFkFOJjkH1kXCW_DPGUUxYK0YvD43Tuf89vcHe-asjgBThW1VpMhs5i-XvBkOI5OKb_lSQaHsl5U39_KUFL291dR-lTwHZsayFXbWMt-qe1xG-v9FRbnrmp_-0I21KLgMn7NR3VQ6oxcT7JhgmSiNi9WiL27rtl2awjO-0tKzaRY6t_OSwkBmNuJ76Qz-GJwUv02b3s3lK3TADh50NUR5F3lpBMYDomFTvMVG3c9vH6h9I1fStAd9re-MBk0vCBJpOz4OMlIVGQG9ZbKfE4fRBXSjfpc1KDm56uB_cF3rCR0e1DSqbMDMaeTPpyZ-ucGIdj-JxzC5QqO9o4cNa2OH9psxxU1jFW8ptyBI1nGQx-icz7FkYFCPEZ7Xjt_trGCtFoEB2fzzrA_fjzZBowkKf1BGLklFGnh8eTQGFlY9rL3ThK_jQUboPAYUP758aRFhvY6wVKnIyrNGXpP6rYvuu3z9ZhiVQkQlDlnHJnML4PnIMNLQK6QZFAM12S4HomR6CtAwy2WJ0P-2utMp72bfDUkmZtgqBy-kGKW1UB0772u5vq3e_Xes1iwt_RlPNg_zRtxv8Etlg4rBxNLnpM5t0YWfVayDd-jaz3-3bcnDddf3ECe5M0AV7f9ELNRyrM_6ZVf0CTY8M23qcxWOaIjdRbN0mSzh1gsoPN7yggjyGqy_A6iN7cb_S4Rsp3yQKCUf9ONGAKvmz8jU5xIUvN3PDGpANtU6gZ8Bh1ejHTROmmoN3PU4rKelDRY4YehGjp6kPEF4aTl3k_H4TW1NdOOkJR5nW32qUVWZ4rsjYIM0CrWxx62o2YQe4BpQ=w1422-h929)

```bash
GET /type_job_interview_status
```
![pic2](https://lh3.googleusercontent.com/fife/APg5EOY7VuhXN2gqMyptVJUbT6aZRkVt6TNXtPPK_OMHFsSIi9lDLccQ8_gM2piIjeIezW1KbyR90AzoI14j7mr1n-dDVb5WkCjGlZnkBQHKnzlEuAH8P21j3d8xBwqh5_K4aId0AXVwHWiljPuyDoyNfq6kz9Zc_7iajglvLNOtzAp1HZjSzQBlPey7MYqrKKbIyO6fUonY5zfaf3XVoJ9btxk-bqqYidEOxZBlCorXBh-nZ8PmdREDEBF0G2H6WV0yd-RMjkP-MDICz-Ye5Pr_EOwy1qRdSkA64-jSx4WaR2JTMnOUVzNMDFLLi_sjwwuo4j6WzoIpbtUIugQoBnasPwUPz67Qz5lrlMCvVGSSNw32-IeILMN9BD8ytgPp-j_tlIUS4C6Mzw3sO2aAR4OZX22H1sAO-PsMdQpREcdATukr2eJX7w6ZELAhrPBJXhatwZA5OBblJkgrbgtKoODXYO_FunCuOI1mXagaLoy7LnPlJxyg7Bc4a73wOdSXvdZdNAyaPwU-EJgS_91SHr-ZLeR_awuRlno4-TjrVzETsqZ8XIoUE9YKX2Krj8ZB4VQtBg1VhpfUJWMhXPlCje9VQuxmQGbLKQZhNqyVM_rUzGOZ4NyohZK5E7yT_aDI3KazPz61GkuAFqSVPG1mUrBSxxxltXfQmkFJB3JjizqE0QLumfW5ODXnKDcJIBQEG3Q8BBz6TYCT0_QbINfvxwiDlCDO8WkAfvLL4ACLJXtfT6xdd55A0RaIhR9prFWVzVRCbvfuk1GLetDoygPAvFzZHNTsF_ZJA--A1e6HUyHahR6CHFf1dXDT04Cww7Aovd2p5eoumeIe6RUrosrZ7kQ03DK3pFyF-adb4K6mX7JHlRlj6Cp6GxZNtIY8mMYPw3hu7wONRb8Zg__jGu8623MZrUc5P_a0xLa_BgP7Zk51vTUvy9-KwLiFYXpTk0K82X5idRulGvDFsg7Cgmf7jlu8RgmtCx2csDlK2pISpbL3gTCF39ntXnHT0k5mpBJlR77X9KnDE4kq-G-envZ1WwdN5k-vRJq8_K4MFODIMA508yNqTj22NqKk-7XGfTTp_CXXhz8XtrxlnBm_WwcyN60h35F3tiW_uj7CeRgPrxP6Py5cm-cZ4FasDddE__BREVFa8R07WLEdL5pCIKQKRCColvFEutCLSTUfr1LecZ5f1P8f5SQuxq051MRZIqxdolDgQN6hCmr3Zt_8Plyl4rF416YAiqww8o5fENeKrItwK5wtEzg9jCFyrgmj788ks1kZbr0K0_OoS9xvCMC09MJRiSId3Kc9cI0QvSawVlbrl2or0wKOxMlkLdrIsgv5Qv7RtmXTeYUdAfHEj6JalpUi6A-UHxoh88FxHTPhkwYHcaIvvgkfiH5TQFHqZluBbpq3QjM5xyuODUK-7MrLxJtNjwQrhUQFVqUeIPRPqUs6m5p48FfaIIGI771S5z18ucaWDpa-Wt0CLMcBWcf2k-zXgYFF8TYvoOzwk6aOy2Kgksb1fZVrIzgcYHk=w1003-h929)

```bash
PUT /job_interview/:job_master_id
```
![pic3](https://lh3.googleusercontent.com/fife/APg5EOaLhU3WRnzbTUhb8SDOjIwphJzbiOJNEBTQEjnWKoF5YLpcZHD-e8EHcTwDhS3Zjuu9EG6XQ4ZCbRLN5fk6la6l_nOmh2Qrw9nY6Stkbsb3z5dytQmxN53uJBtXcqoKbWtWyp921bpwnXfRWyHycGJ_Fv3_y-ka63nJb10tWlJX_MN1ABLnwPtwOuRJsupSzzMKZ4lmJ_dlJYSyH_ANMwYGJ2la4nOnVsvGUlaFQklcdes84o5ccqgVhOzm-sbmXlfzJuW6EWsBvjFJ5LxhnwsuxLXK19a1ma5F_av2V7a6Q50j_ERFc0QcuaQmLTbSwjezWIEkko2lK64vYlI6dS9gFz6tSoYTMocoNOLdDgxDi1qsNc1XDg3kHs-zI6Ux-XFenaXpe8KT4RGfRb6lFjTLmhLW1jeqyrk-2DAdCx0H6IsDQYltyOg7gXXbK_Zy1WTDMtD4FSn2j3CTslHgA5_dFgEEmPzo57ec6jR3kFCRudggR_tSnoJNcNTAtMHUjsyceNK6iJJHev_Jcbuq_iFR9s9BNalZ0qlkbufp6xRnqNh7zj0QFeqMJaJudiEErGtoL9jHhz7abVBABF6UXYwxcg_2mf_RDC5uS-o40OhdM7RtxAphS-kAEwE0-FRyEOhu1ct7RukVdOT8vPfx-UxF7ub4-cSZoFu0HOMgBBYHf5EK1vmZDJthd4o6JfUiltsKzwTuuAZ4smBGAdPT3YriLqGLPUCLh_8vB_Wu32zixWKQ0HAcYml9whOw-g-kRtXZp_VFPsXoItFXuY-1MowkOLpSXAy8gTndp25YUpfveXDug7I31IPb3w95rmIx1HQLg8aG9ty6jcFv5vmfyG9Dc-TBDIiAZOWmJrpTQ-8GSABozo4Ucol2Rn76FEjXVLCxyhDSSMv82ICd57m6Txmud4c7GGDkq4IY0NtwkBRS6YjV9eDe4A0rMJIirK-94Aza_Rgji3enrmF70sjFH5LgWvXecBi12Yog1P2zKSPTfulgABS9dFduFhb-MzHej6u0nrFZQBlYEE-Wlixx4kmqI1xMZo7iZnFExqSZ10jErHv0iQ-VghoJbr09hEgCLFKb8UXmGsKPUDfyvP3aUXF1XjiRAFx7encmeI7SaGzJS8lI5nlhCDWPQkyY_fcqjSMax32QWMAVlxWb6l5bhEnw2esUqA-wCYUp5lf3XjCS1td91kqDS4cK-kLPExqMnDw-9k2pnlRsea_3Y-tN8zXBizVBSX_3OkszIHBN_bjAWVZ-agi6M7LHVbFdXdjHmeR2RdzoEpbL9X6zrBR7zZ0rcang71HSq9D_2qydxVAeii_Ub9_QDivecTFRj9bHYtCf8tvaCIr4NvHwhIC7B_tlLHzn6AOn_ZIUzQZpsHI4HYfElJjV4d8Fj-rDmTIRHgi1MDWyeNuMWejFB8dG-nrh-SBftWm9tk8KTONNU3zK0H_4PYgEfxAaAcTvkgHJ9imv2OseyCTvFaseSyqlrV3YXVY8wvvysAhw6djRGZkjk9bJkOzIBR4=w1003-h929)

```bash
PUT /job_interview/archive/:job_master_id
```
![pic4](https://lh3.googleusercontent.com/fife/APg5EOa07ZgFKNC65WvjArJZUTI9EaoOe4pEousIizNEssW4OVDmYtf0aEM-280a_9oXjJ2spSakB3zkSwzovY3AkzZ_N08xXChTuWvWN1Aw7owV9sbZuysEx2tPKPgTDx97KsvsfCNRpTqYrvMeU4NiBU_BtpuNdGc8IJi_NzC2fpb9sUdDrL_a165Leke3zFfrf7FyH9cbO1kZr4yEXUWZ5WZiu_royZwtZF0-M7yP_RgDvJQfHapzujpa0QtM1C7lqU4xIEhZT1Ese19C_5hUl3l8DZdUqHfWFCq5J0Nq6kRaQsRZMclfrz_XXLsAJ4VBtfghC-BA-KPxYFKYAb_tM6woAlSOd09P7d-SDgWlgfibcfJQlEtDCI5iJoQ15EKstNoJXwQfEhBb9KSoiacHTTNcPYazQMf3cuW7o3PFC2fmEV2yi7PZnB0L5Z91pJXgAc0Gbr_5xOoikBZq5eUQcjRn6YdCdyJgeZCfBJlkpfylXX3nT7Ci2P8NhkyC1wO0sEkNp6c46-GAHUebJKliSBr58vqGgSB9K7yGFduDtMgcAIQLQ4aPRovrHQ3uyceeeTKeffyvyEW2oKgaCUExVZeFc_MXAZwQHABpuiuakknq8CvLSiIMKZdIZ8hCEZhnVTjNG_pDFCSaM6e0NlL9MQHSBIJW_vTCXkr8OSI0A0Itk_kLm6kKY6L1qB57vcIL5HjxZ6cPyp1LOlSv03Yq7e6gsE7n2lYFmFFIqzi_liGY0wtxswDhQIVSar6g0_MAoSpEMjziMcg6cBifrrkvZ0ujkpdX0kXhDK8-o9ttF9H7MRcFjJBYy8k19Ph5BZzBHCnHEj3oSS8EiRPj4DLJcnjRm4dvvvBaTrmt1deByhw-n3B9y6eU4eZewT2kfOKqzZLZF5G1Udlu8yFEL9f4CwA_sa0TDR1PJoIh13cBIule5TBGlzPHjMP03jg3tuhLIEN1HKNW_T3AgND9jM2y2yv9i6b9Mq4QplTVjyUYVdb9MHt9WpZo7R0RFQPBENSVJCnHGImL78g0o5s2DFFpePAxCSMHOx0WuSEloIxGMMals5vS_ZyRNf3s9FHO4-omJPctpMKSbEyMcT7ad2411bcoUafjhwS3OHOmAKhAqQD9aUU4i7ynYkSxQo6tmlN-qnIW7WxJ_25cP551v1MzRPvJ2jQ5UmwA74-kFzoVkifXLr1wi9_qyM9TmoywcVD_hxU9HLLyR7fHMwOY4J12TJ0mbcTrt7OFljcgLsOfipWVBC6XB_arK-8BFGszh_JB9xgKX7zUruJv-gepEP0XwK6K-4Jybg3TFe5HnQkcSMt191ewxJ4dlW5yUv1xlK6KfCGv_S6DNEkjNm5vifeO3pKZlfkV30WoqFcaOeUEA9hX1r3xMyLvdi87aGCKdaE9cptfWyjzCustbHuVrTxEqgnLdNCfCXi4vpOWUM_0mN6ldPo1jggm3iLK1ffxqofsLjGhFso8ORDzHMj2p760cSOG2Kqrt1M3mZgIbwUb8Q-eYt2iO8vlNCQ=w1003-h929)

- ผลลัพธ์
![db1](https://lh3.googleusercontent.com/fife/APg5EOY4R0kfMJZWCumm7MxjPNPwWaXr37cOnnC0EyomRvRIj5GiK9IqpxU8WtcxRcsPBHF59bLeUdLKSOCNPVjoikkkfa4ai401ekUvZ8VSmNMSaZwFg3ZgeFIoEHqhj1ZGqNIihiZfBkgJ1WdIUHz7LSuuPJZzUHIrwbha9DYySAY8bDRxv-Q4MW0YD67aTEERubqAjWDYaN_0Uba6Rl1-V8VlINf6L9L7BBpXKrv59OmGv-DR9xV-FKNUYpQu9XoTDYjxpCyw5GtKJ5ZVw0BJsH1muzmlarOu7UZqNDE58lp0X_I4euyb8kllvvw_LIzamDlQMkYAU_FNU7HEJVLQeD1FohK2B97G9zUWU6gTIxFvmyOEWmLdZUWATs9VaXBeRmTINX9OQe83jjyHz7mgcIN8bkfxMSVnpo0LKfdSDm3d1KOahCNc6Yz-vn3ZGUKjJafDDcE7iepYGf2HjeTlC4SjmjZmZiO8d1sBbJMSqjR8GZ6yGicaduhmKLmfGsmArdEWfMJuBNXd5pyWoPIsTv9qY0qxcEXfd6gzTdjqMeLiXSuMSN-ZxKw4BRsGDJifWxF7dYoyibJ21RrCE2JWwKKte2mYHeonUTrHOmAg2u6vtzHZtFW_Be4R3S1z8wU-kvgWNlGZbcfajUqsoauGubvB5E8AIhQbtK3rz1jgK3ZGY50HNXGVJ38gZ0SdoHIzfKx63n04lyD5OSHxgfJbK14EtBGqfJ0JXUsLNUgiZb0lC1Vh08fwsaMCL6pWLFoBR5Stq8nGUJ_6iu4k_ooLSQozlnGPGK4wpnHG52KUd7qjuRz6PnmyI8RGW4nEVNRWpoIS2NgwWEk_pFzsueDihngX8sqBEFP7k92RyoIsE_aqzfCTLUACrMgaEF1aKpBPJltd4lGx35AFywFk3ZqwXMf9Koid8kA0OCkUFmd42Dx9CW-kNkuj-k0uCpv0nLQEhM8JYutjoqyFFwjZF3wBjF2ZRgwnQJ8unEGZDwZrIsuPwPhQnI0Cdr0XyeS8RTAoZrciXcWazEQo6Sbgt0bh5RHP_kwIZKsU8JpBk8AMTvc0Kuvr2WZCMWPAO9yrZagMnQ8s7oHyV23vKa3P7wC9VCu9iwMdKFnUak8npnqYb580DPpCb4aQZ2p8ymzqwXs8YSMBwwFM0S7PdcQi6HhdY7orNT31l8Zpu3uyZNzpnPrS6bXEQ9wY67aAtG_YuEncGscIXIac9bCOqfnbDmE15LYSgaEMOu5gi4NPt5Ep5RxaY6mpnPPVPwTsCHG0cxVnCujTMa-EQXnYV-_Aaypz5D2f1l34mY2MJSRH3praazLkMFyUhXp1THs5CZhqkT_u5URnYJPkarabCG5qoFAIZ1K6qFyVh60M3TYAAHPgWSQVSf9Rbyn7FZhm5x_KStnRgc8nSEwo6UzXTB16mwQeNwcAywbydV-dm7DKRPXN6GKcHQ6Eb1_952919A9-lpFM1Gchi5IN7iXNPs0fxGPQO-OwcQ0y4YpJVFyErjiyhBWFboz59wYWJdU=w1003-h929)

```bash
GET /job_interview/detail/:job_master_id
```
![pic6](https://lh3.googleusercontent.com/fife/APg5EOaoz4R_JTe1GBFlOSK-rSKNiwZQ7LgWaKEvmD4KwCU4Jun5dz_zimawJJ17BeFJHLaV_8s-7BYGwAkiI6k76KbgI7dC-xnyiFB5SYe3iQCdbQvN4-yGSAiZFtYzGQInWHOqU9NUSK_GVElJf3jcxkqKGLBuxfX_2bTNwkHwuBxZ5AMzYYr2wllaEteFdurU_dxH4H9VTRiaVb0kOA2rz6Ea-QTWxucr7fpgrxodXPtb8TzSeRPgEieShkLr-WhGRmYKGQiVmM49g-h_nPI0_MHduDMiqRfhOfJlZZyrA1758IthFm-fAefhPudYG_JUwY5DyrdDFBfgFv7wZ1zUhjTA1QLlZFvltvYd6j9mlEgSStVZA6Lm3ljPeOjU5tW5MNp-5PutvxWxD6Dg9YtUArom21N5rLLeStefY-C8ZnEiiPzZh5CfANMcQLdaWPZca4Yn8bFMu3h3Sr9J3YdGo7oFEwABuugYF2tFasZFlM0sApTfhEBhZZr4Dd3Mo2cRFbZlf-fT0uFX71cCNcc48UScU4GB_8J_i3bmtHVdM4dSSO2mObw4mJcmr9GztSkSOKIqAcX00ASo9Pfb7rxPdUCj_hQal_KPD_BZmC3d_hk_6JHCtbBYmr8pRbD_qB1l3U0emGDYUmMOFHOVi2h134D39ofPX5KtTdUVVOp_3HRqIJ6Q-oZ7WoNdUOfK_Iwl4gulF6_aCoYpo4cynCBCrVzuwCVTcEy-U6wGVZ7DBuSfu5zAEPACFaAi4Hd13Lz9gEuJu52zkvy38tyNg6LY95cimGamQou_MQayyH2IiHbjrUN66GLaX1ErHkDyC7lZ4C6bE5Xo06DDXGcChbYjkQ-o2Ax7Ax8MqLz7aAf0FmoV9BFU6sprN9eb-_kpG0hxQmholJAOmIDv203sX-9vhfGnJennPwcQFIZbD-F4ttBvyVm9qhmxP_6tej2kzj6ifWQibLYjYKdumnKyJxSX-4dR2F6ssBzB8MKge45XII3CBoOoNoGP13HNefM3lhaaChADV7JrX9Pmchc9AxKggzGHN4xWz1NTJV5k6lR7r-u5l5LnlCKKwttAULkGrVDx3du29WWpNhFzsVs4U-EpaSre52mrMKfuh3LCTvKinmQt938YjSOO7eWD5VXOVym8X-W0ZXy46ftLnUbeFU3NrhlOShmC7Zw_bpTevevxTrE1riPS54qaWS9wc5Fjn2dBGmRy6Kl0PnusiJ-7jkvMpR7r4DECYCuCSyLQlWX8PqlUqeC6LkKqQH_h12_tTODU_lIPxnwnGlTyxldFf-QPQ_fDIXLJfS8n6KPQxaiHm32-T8AxVg9TtKt8M8_Y_aEn-ewkjAq4W-ZFQggqf17FF4NUoOKjf9SMjjvjfMNZUDsiIHH38P8pZFUI3IM93EtRFOYAZdgq0TPCznkxLhpQ_yt7T8mn8_WYsljdlYW5kVs_WmeAR-EgBb0IS1irhPrOCnur2k_Xi6DU-fivJt1lEWkpoabqWEHgVyxqFwCFuKvdmOWI87vNr-g=w1003-h929)

```bash
POST /job_interview/detail/:job_master_id
```
![pic7](https://lh3.googleusercontent.com/fife/APg5EOZ5WS_BDGKIRTNG98TpqujtmXOqunR6mBbFNaq7wP5lNqY2C_XSjuaIu6ocRNC3ZO_eDn56QNqjtWs-1k45h7euGUmE95rLYub5e4gm1tdlJjhHIG83fuqGFd6xib9W_ZMsd7DDTmfViChET8PYfUwg1uVGFkrs2IsJG6nexHz8i0kiv7OW2wKEbRSCpoXJuuGnGoDgu51Vxy5r43fcK-UjQVFH_KPEdBjG-1QA6mnJzAZ8DrA8HKAjxvo5ql5QUff-nMl1piLS5AjMdmNtmwZxkGobwISHOCODelCycJ9SNXgQg1rMWMxynj0We9uaNNEdpl7sXIZYHhg3ROPDsaYf8jl7FwyI9b_iDhKhuO4ExM0m5P6tI5sVyHj3g1NnrBWFDe3zYF6cKE3SY3u7qUWpioFynSbZb9KdrPb84EuyEkNb-SwpRUyoXfjCeg5xgevjc5MIMTnBv2VL1uuXoeBllgioeWHAZL4HH8cOEVLKELtjOsYUbhKLFwz4-VED3z2fDskHFlW5JxVOmYDkbL5mS96S51rfZNSyC1iKy57BI0XIBR39Afh0WEHYPp4VSei_tojySW58cfMRL4XpvSDJOWukHytXdrtKWeMEMOAErOVjEOrcDScHzOlTdYzO13mUlLwpdddpUXrFHEF-LjnN2YY3S3f8oz5wxQ1TVPA9mokEh37kN99gb3FH4MQFDITdap7RNj2DhKMzr5yq4ifh91N5XMaehnV5FTChwgw4dNHJBXhbquguz-sEnYvmdaF0ztbpl9RqTtC7eZrHLZjhgHjuJU5iOV-O2R-x129mraDSNRQlY_v-t--5z-EVCDZdBxXCv8okvmh4G1f9BMasLH7YCEL-G6UssaA2tD0Z66U-qA19mj4xRUT3ND80fvrEAql7YZ7U6nA08cOwqLZICmGSsvCLhtIiU48bEe1LQbXcGDIf_jq_qmlN58bQKJ-EtWJD00mJWVwMhywEIhGyD4hEfc0RkSLi4bpwVrrGstZt4_fVprV6GRt_6EHbexF2DaeFNUwSrJBm8fHCXpR2189tlh9TZQfs9bj0XEdqY_2vpv5m3XlQ-JPUUIY40OKxCt91x6I0Ro-Y_U5LKhPRsqJoKB5N8l4DWpluRR1QKo4HODWPWik14tJARcCn2lgmxpSV4DBc5UDg7fW-sP1BoqqnuYmA56IcmkRWB7mIqTqjQ4chh6vWTJVHJ7cRAIL7MJFW9PbfqD0X5uWQ7w9GuDNU4ej_crp_aJSRnxJpyLnBW2EMahXrjmKVBOZJUlkspZtAATz3jzmj6vUcLOAKLQhWJfVP7wpfM7UXUOuWzZRK-w3LjbovE9vZ7Ftirav362q5AoizRFLnS_TKdH3n8UUrMjPPKuqdXAEwFkvaxFsrhCJOUw7WyQyVNAFgtF6STFFR7Z8TviUg1pXFQQHcBVZHb-lsoHLzYoBBmU_magbKQ7upnDmnBPohsvnh_fQvsIaEa_maoqLrUuXibmxBYQgFxizS5mmwqRmDvO8dNPU_wufzOlc=w1003-h929)

- ผลลัพธ์
![db2](https://lh3.googleusercontent.com/fife/APg5EOa2okZrbKWVgY8ENaSS_OTZjqPCpDqtfI8W4Hp3IokGj117uH9TINratgXXSr_X6kewSyl1IsrTPFsgYlG4S97es8hxuBzbd3G_3PL_zZLUdXgO6GOIwWt0n-EeMbEQ11hcJjUPCS1m-75EvYPZnQ1c_wSANg6uE6Hgu_kmioaNqhxfC5Bg_ygxx8rvHpNPQiZSrYA9q12kXorRgzOcdmnbGtynl0ycivk8xc1qaS-zkXNbYgJH5b4mpfzx5w-FZ_oTdt3ltYqyvcWxtVFXxYLyIhLHMrnDGKuLvExsMCv9BiUPbehtLe1kZ9973f8DXxGgqnS6BSLaNJx2tqurkduLj5_Xrqqva2sqSJSHxmJnenxIJuC81zpMdPWrPKX60zNlNF5m460NJWYg6eQca8-7YxEbEOMTw4i-QpdOHYRfBs4SeZ2WpF_k0lAxgNZrLDDposvK3_ZR747Dd6CTk_o0sh5GqzpZew5T_1MmQfrIZGRtihGFiJG5qD6jN8pE4RpapCzbigaLEqUW7wJiThB2hK_d0lc2zZgO6-2P27O1QVxgTzhk9LvWFqeH1NFxH0vHFju6rERsJGF8DEFhd4zmzwQYoAjSkE1jm1186gV5UKFqzBaF-7EuQKZd5cSlKu99_1bG8xTwbcvxF1fH3xXM3x63uI3shgEl9PYZWlKE4zh_EsBaAedzQGJpYykOCNstyjpKxkInOKYpONv0vSRdePQ_w8N7qExrusngrJuA8W1Ean4U2_KqaznUrq9Ds_uTBhMBnn9fGkw_i8IKhf8WbJf2SQ8gtEeJZ_Yqj3VAwyK_tZ0cdWFVqXBc9NGtSuVIsNSVFID2mwGarE_E-T98pvDCuMDYm0mEGDJP3Fvy3l3yjwTS5UO85WMu3kOS7IP8gYOvLSGZuJXy2V2yJQEuQf7ns3SwJWI64MnxSes0Q0hJId51_11oEMniOjprzGxTkBLKNzKClQHLvHoVtHEhuD3oYH_N4JUSz4quhY2TCVfdhCJykcCvYvY1hYaqEyUrwQz6Z6gJTVsbrQDug79WoS4uyskLCCcMSbcrCxP9gPEhix10pyAMKWh2RclK4T1MSOYDxIEGzRyamjQpr65yLe-ekmb5inT6BMvCDHcvoKeENZZMI9cft6cavIu5nHWQCs5Tiglradqas8IZr2qOJJEHnqlHffMC8MSh6eXKtKoa51OLvVNwUHUOUKZtKOjQz7ltzYxu-ypg5CTPNE2w0OBf_HLSwY-P5VvkggGAhTTFO7XKDLM-G6OCXRl6d3IV9jkIdqdoyKcVZEevRxZhG79r60HGfgJqXo5ZtrkY3bBDAzPswBKHSj6jh6tEc3CX_85k1IhqYebkBQpyrjN5FqAIlSjIAzKV0G3AtTtDH6cScm1jRz9XOfYTV6q4ddMUNP0yLzwFZrtJ4ZhLC4ui-P6_wqPYeJtLpPpPWsena932yCAGVDdZgy2WRKlqbPRMBH5vschKz79ersjKdaViQ7Qb2ixJOB_Qp0UkkDNrzN5WWDq-5Yc=w1003-h929)

- Database: type_job_interview_status
![db3](https://lh3.googleusercontent.com/fife/APg5EOY3is-AYa10vj-UHCZ-4K6aGA9xrqeGFwNFYVeF_VDC6dkga3WFXkit0fLbgejb3Cje7sHswmus6eQcWBFxtrjqBipIrHyOStAIx66b_Z2ETqZelT_R1n9Yf2o2ap0JVgK-dMiftJagbLVMQaxMFDVXR1NkvhPLsle3B2mRf6E0H_vKrmVVVb3f_SHGbXHB1IwWsfvyIkymAR-Kr5XQxURcqjwwn6mVqTiaNRzLGqwrHALjflYTmO0smH4yAybHdwtzz4UhobCQWP0SzeLNWgEh8QeBDEcsJvdFeV2Mo4WUBfBZFNzSyZvYDIhhqrooLcooVdRF7LE1CHxLp4EuSIuabeqc-IkP5ZUfQWQ8tQ6dTjeO58GODue4fBPqPnr1lkSciCl0k_Ggldh0Q_oZpBnoTLd9fA7VucypV-PsEPL8YdBGgLlQqqMUvPdueovk3UfJ__IUc0u7pKaUhcKLU84nFdDAanNW764EECJhmvGkO_qozz6weGfXUdyoC0jfIEf6D_t956PtgyxzMkEOoZSQSS2kLAdXzU9f_tNRCaJkMAzBdVnu-S4XUsdNnQNk4STD4IPWxcpaNn26Hc2i5ZtMqwaA5mGUeegz04bagsons88Fz33K4_GFJG61rujcOgY9M_QT0WlBw7p1kZM50yvk9TYr49IZe6KociKKkPwhbRQeLhrgW9McuhqsAndfFoGfH_U8gpexZnpFB5O8SMtX6Fx-437V4pzEeRs8ThxI8eHCz4ztESOLppaNBDyf0QgMQPMA93YqslLQ7GuJ0vmvg0-ucrvTrUt9Ys8Man7MUc0x4K--mLV2jr1zl2yHv2H2jf-DCMEdp5I3Orb2XcSS60ilHya1gnCFk8u7D0UAP_PFZxDJ8EhjPkLFTK9f5Juc6BuxqqZSauq-tszTkvtrBFeXR7uv1kiz5CsrGqhwyUD4s0NKlVahYcOJzpVZescLoE4H4sat4oyskZ8ouKzXKdULAnIMcQYw9FPTQj0ciIIMHEQGkvYYr_PJGcEGnFsuGZDDgLuSmATeglcCiI4PMxPRYJ6p-dBDsvTMV2BX1779JytwlHGg5_RhvfNpfwM6hTN2tfmoJNQaAyAyMIz41aMQ2k6jlCViYpyfz9I4XzLsbX5m7ltxtXLSa726olGrmnCWH7i70AoXQDlr63EKF8y91oZvMfmvgxXrD_0goRB1gp41mlfWN4DCbRFHAM-PNnXmj1HepRzYDq6tv652wHKptWGYD7DKfhspNsxN1uF5WCdQPtpMonIP6EcIJuMRIoqQ5J9yb4HETEgdX19UvgWxqeY1oJOKiDgUOGAGBdYys6XUuRrl3X8Zp8AJ6iUtOcB4xZLn8qPBhVmQND7_eFE4C2IgQyNWDw3XPeb7aq1pxw08lZVyTX1zN9Br3g4PQ3cThpt7ohZqOaMlabF8hfvu-kop5DbVOKbXrJ-HCTibZuzHHQ20qGD1QIrwKk-vlZlDxBW2gMrDYlS_uyWuJu1Iwzi8hG3auMycGquVGdahv2FYs34=w1003-h929)
