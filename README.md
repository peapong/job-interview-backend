
# Project Job Interview Backend

Test Back-end 'Job Interview Purple'🚀

    
## Tech Stack

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

#### Get all data with limit and offset, to use show in card list.
  เรียกดูข้อมูลผู้นัดสัมภาษณ์ทั้งหมด โดยสามารถกำหนดจำนวนข้อมูลที่จะเรียกได้ (See More)

```http
  GET /explorer/job_interview
```

#### General Search Parameter
| Parameter | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `limit` | `number` | optional    |  จำนวนข้อมูลที่จะแสดง *ใช้สำหรับการกด See More* |
| `offset` | `number` | optional    |  จำนวนข้อมูลที่จะเริ่ม หรือถูกข้าม *ใช้สำหรับการกด See More*|

###
#### Get all type job status data, to use select status in front-end.
  เรียกดูข้อมูลสถานะทั้งหมดต่างๆ ไว้สำหรับใช้ในการเลือกสถานะ

```http
  GET /type_job_interview_status
```
###

#### Update job interview status user by job master id.
  อัพเดต แก้ไขข้อมูลสถานะการสัมภาษณ์งาน
```http
  PUT /job_interview/:job_master_id
```
#### Path Parameters
| Parameter | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

#### Request Body
| Body | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `job_interview_status_id` | `number` | Required    |  อัพเดตสถานะของ user ที่มาจากการเลือกการ์ด |

###

#### Update is_active user to 'n' by job_master_id to archive card user.
  อัพเดต เปลี่ยนสถานะผู้สัมภาษณ์เป็นการจัดเก็บการ์ด ทำให้ข้อมูลไม่แสดงเมื่อมีการเรียกใช้ ( is_active = 'n' )
```http
  PUT /job_interview/archive/:job_master_id
```
#### Path Parameters
| Parameter | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

###

#### Get all data in user by job_master_id and get data detail (Comment.) with limit and offset
  เรียกดูข้อมูลการคอมเม้นท์และรายละเอียดต่างๆ ของผู้คอมเม้นท์ โดยสามารถกำหนดจำนวนข้อมูลที่จะเรียกได้
```http
  GET /job_interview/detail/:job_master_id
```
#### General Search Parameter
| Parameter | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `limit` | `number` | optional    |  จำนวนข้อมูลที่จะแสดง *ใช้สำหรับการกด See More* |
| `offset` | `number` | optional    |  จำนวนข้อมูลที่จะเริ่ม หรือถูกข้าม *ใช้สำหรับการกด See More*|

#### Path Parameters
| Parameter | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

###

#### Create comment by job_master_id in job_interview_detail.
  สร้าง หรือเขียนคอมเม้นท์ในหน้ารายละเอียดของผู้สัมภาษณ์นั้นๆ โดยกรอกชื่อและข้อความที่ต้องการวิจารณ์
```http
  PUT /job_interview/detail/:job_master_id'
```
#### Path Parameters
| Parameter | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

#### Request Body
| Body | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `title_comment_user_name` | `string` | Optional    |  name เจ้าของ comment |
| `body_comment` | `string` | Optional    |  รายละเอียด comment |



## Database
https://drive.google.com/file/d/1AmJrGxm0VBOqPCF47_T64cm6CXpOoL9I/view?usp=sharing