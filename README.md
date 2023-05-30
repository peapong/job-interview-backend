
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

```http
  GET /explorer/job_interview
```

#### General Search Parameter
| Parameter | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `limit` | `number` | optional    |  จำนวนข้อมูลที่จะแสดง *ใช้สำหรับการกด See More* |
| `offset` | `number` | optional    |  จำนวนข้อมูลที่จะเริ่ม หรือถูกข้าม *ใช้สำหรับการกด See More*|

#### Get all type job status data, to use select status in front-end.

```http
  GET /type_job_interview_status
```
###

#### Update job interview status user by job master id.
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

#### Update is_active user to 'n' by job_master_id to archive card user.
```http
  PUT /job_interview/archive/:job_master_id
```
#### Path Parameters
| Parameter | Data Type  | Required / Optional    | Description      |
| :-------- | :------- | :------------- | :------------------------- |
| `job_master_id` | `string` | Required    |  ระบุ id ของ User ที่มาจากการเลือกการ์ด |

#### Get all data in user by job_master_id and get data detail (Comment.) with limit and offset

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

#### Create comment by job_master_id in job_interview_detail.
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