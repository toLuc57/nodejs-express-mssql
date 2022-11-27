UPDATE [dbo].[Category]
SET [Name] = @name
    ,[Slug] = @slug
    ,[ParentId] = @parentId
    ,[Orders] = @orders
    ,[Metakey] = @metakey
    ,[Metadesc] = @metadesc
    ,[CreateBy] = @createBy
    ,[CreateAt] = @createAt
    ,[UpdateBy] = @updateBy
    ,[UpdateAt] = @updateAt
    ,[Status] = @status
WHERE [Id] = @id

SELECT  [Id]
      ,[Name]
      ,[Slug]
      ,[ParentId]
      ,[Orders]
      ,[Metakey]
      ,[Metadesc]
      ,[CreateBy]
      ,[CreateAt]
      ,[UpdateBy]
      ,[UpdateAt]
      ,[Status]
  FROM [dbo].[Category]
  WHERE [Id]=@id