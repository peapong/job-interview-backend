
## Project Job Interview Backend

Test Back-end 'Job Interview Purple'🚀

    
### Tech Stack

**database:** mySql

**Server:** Node, Fastify, Docker

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
  
    อัพเดต เปลี่ยนสถานะผู้สัมภาษณ์เป็นการจัดเก็บการ์ด ทำให้ข้อมูลไม่แสดงเมื่อมีการเรียกใช้ ( is_active = 'n' )

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
![pic](https://lh3.google.com/u/0/d/1AKOgaGiKqYjfCWOih_-rU9znX9WA4N7s=w3730-h1498-iv1)

```bash
GET /type_job_interview_status
```
![pic](https://lh3.google.com/u/0/d/1OEqAVrp2BxmCIw3gSWXsS4F_BwCF4rSV=w2032-h1498-iv1)

```bash
PUT /job_interview/:job_master_id
```
![pic](https://lh3.google.com/u/0/d/1FVDh7UfqvbAWju83bZgrtPeDpfMFYPhp=w2032-h1498-iv1)

```bash
PUT /job_interview/archive/:job_master_id
```
![pic](https://lh3.google.com/u/0/d/1PV6CaVRbLf4jIuGRh5HCnWDa2lfHSlNc=w2032-h1498-iv1)

- ผลลัพธ์
![pic](https://lh3.google.com/u/0/d/1f97PfcC7gkKN0BPaaBi1Dt1laP4JTSN4=w2032-h1498-iv1)

```bash
GET /job_interview/detail/:job_master_id
```
![pic](https://lh3.google.com/u/0/d/1J7-cLflndQVZtTSTAXuRt2Rspk7JykX_=w2032-h1498-iv1)

```bash
POST /job_interview/detail/:job_master_id
```
![pic](https://lh3.google.com/u/0/d/1t_L_uslGvUA33gBMnMUBmNrN2axHSKBv=w2032-h1498-iv1)

- ผลลัพธ์
![pic](https://lh3.google.com/u/0/d/1OzEMyhqUkjrdKXw9u73eyXHcoHchZ5CI=w2032-h1498-iv1)

- Database: type_job_interview_status
![pic](https://lh3.google.com/u/0/d/1aeVAX4n9LFFYmoZQ0hf7bAgJKdewNGWT=w2770-h1498-iv1)
